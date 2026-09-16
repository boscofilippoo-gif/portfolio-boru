import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Solo in sviluppo: permette di aprire il sito dal telefono sulla stessa
  // rete. Senza, Next blocca le richieste cross-origin del ricaricamento a
  // caldo e la pagina sembra rotta. Aggiungi qui l'IP del tuo Mac se cambia.
  allowedDevOrigins: ["192.168.10.213"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Il portfolio è pubblico ma deve restare fuori dai motori di ricerca.
  // L'header copre anche le immagini, che i meta tag non raggiungono.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
