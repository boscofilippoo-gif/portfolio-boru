// Generato da genera-dimensioni.mjs — non modificare a mano.
export const dimensioni: Record<string, [number, number]> = {
  "/progetti/eddyline/cover.webp": [1600, 1200],
  "/progetti/eddyline/foto-canyoning.jpg": [1420, 1065],
  "/progetti/eddyline/foto-rafting.jpg": [1420, 1065],
  "/progetti/eddyline/hero-scelta.jpg": [2400, 1800],
  "/progetti/eddyline/landing-canyoning.jpg": [2400, 1800],
  "/progetti/eddyline/landing-rafting.jpg": [2400, 1800],
  "/progetti/eddyline/split-decisioni.png": [2400, 1029],
  "/progetti/konsulto/cover.webp": [1600, 1200],
  "/progetti/konsulto/distribuzione.png": [2400, 1800],
  "/progetti/konsulto/funnel-paralleli.png": [2400, 1029],
  "/progetti/konsulto/hero-webinar.jpg": [2400, 1800],
  "/progetti/konsulto/landing-evergreen.png": [2400, 1800],
  "/progetti/konsulto/landing-webinar.png": [2400, 1800],
  "/progetti/konsulto/qualificazione.png": [2400, 1800],
  "/progetti/konsulto/schema-integrazioni.png": [2400, 1050],
  "/progetti/miwa/cover.webp": [1600, 1200],
  "/progetti/miwa/feed-instagram.jpg": [2400, 1800],
  "/progetti/miwa/hero-campagna.jpg": [2400, 1800],
  "/progetti/miwa/piattaforma.jpg": [2400, 1800],
  "/progetti/swapa/cover.webp": [1600, 1200],
  "/progetti/swapa/email-benvenuto.png": [2400, 1800],
  "/progetti/swapa/hero.jpg": [2400, 1800],
  "/progetti/swapa/landing-b2b.png": [2400, 1800],
  "/progetti/swapa/landing-b2c.png": [2400, 1800],
  "/progetti/swapa/relatia-pipeline.webp": [2000, 1408],
  "/progetti/swapa/workflow-calendly-crm.webp": [2000, 1049],
};

export function misura(src: string): { width: number; height: number } {
  const d = dimensioni[src];
  // Se un'immagine non è in mappa si assume 4:3: meglio una proporzione
  // plausibile che un errore in pagina.
  return d ? { width: d[0], height: d[1] } : { width: 1600, height: 1200 };
}
