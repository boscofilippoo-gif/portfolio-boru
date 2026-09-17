// Cattura schermate di pagine web pilotando Chrome dal protocollo DevTools.
//
//   node cattura-pagine.mjs <config.json>
//
// Si usa questo invece di `chrome --screenshot` perché serve impostare dei
// valori in localStorage *prima* che la pagina si carichi: le pagine da
// catturare mostrano un banner cookie che oscura tutto, e dichiarare il
// consenso in anticipo lo fa semplicemente non comparire. Nessun click, nessun
// form compilato.
import { spawn } from "node:child_process";
import { mkdtempSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { readFile } from "node:fs/promises";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const config = JSON.parse(await readFile(process.argv[2], "utf8"));
const porta = 9333;

const profilo = mkdtempSync(join(tmpdir(), "cattura-"));
const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${porta}`,
  `--user-data-dir=${profilo}`,
  "about:blank",
], { stdio: "ignore" });

const attendi = (ms) => new Promise((r) => setTimeout(r, ms));

/** Aspetta che Chrome risponda: parte in un tempo non prevedibile. */
async function endpoint() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${porta}/json/version`);
      return (await r.json()).webSocketDebuggerUrl;
    } catch { await attendi(250); }
  }
  throw new Error("Chrome non ha aperto la porta di debug");
}

const ws = new WebSocket(await endpoint());
await new Promise((r) => (ws.onopen = r));

let id = 0;
const attese = new Map();
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && attese.has(m.id)) {
    const { ok, ko } = attese.get(m.id);
    attese.delete(m.id);
    m.error ? ko(new Error(m.error.message)) : ok(m.result);
  }
};
const invia = (method, params = {}, sessionId) =>
  new Promise((ok, ko) => {
    const n = ++id;
    attese.set(n, { ok, ko });
    ws.send(JSON.stringify({ id: n, method, params, sessionId }));
  });

for (const c of config.catture) {
  const { targetId } = await invia("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await invia("Target.attachToTarget", { targetId, flatten: true });

  await invia("Emulation.setDeviceMetricsOverride", {
    width: c.larghezza, height: c.altezza, deviceScaleFactor: 2, mobile: Boolean(c.telefono),
  }, sessionId);
  await invia("Page.enable", {}, sessionId);

  if (config.primaDelCaricamento) {
    await invia("Page.addScriptToEvaluateOnNewDocument", { source: config.primaDelCaricamento }, sessionId);
  }

  await invia("Page.navigate", { url: c.url }, sessionId);
  await attendi(c.attesa ?? 6000);

  if (c.scorri) {
    await invia("Runtime.evaluate", { expression: `window.scrollTo(0, ${c.scorri})` }, sessionId);
    await attendi(1500);
  }

  const { data } = await invia("Page.captureScreenshot", { format: "png" }, sessionId);
  mkdirSync(dirname(c.file), { recursive: true });
  writeFileSync(c.file, Buffer.from(data, "base64"));
  console.log(`${c.file}  ${c.larghezza}x${c.altezza}${c.scorri ? ` @${c.scorri}` : ""}`);

  await invia("Target.closeTarget", { targetId });
}

ws.close();
chrome.kill();
