import Image from "next/image";
import { GrigliaProgetti } from "@/components/griglia-progetti";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-24">
      <header className="mb-14 md:mb-20">
        <a
          href="https://borustudio.it"
          className="inline-block transition-opacity hover:opacity-70"
        >
          <Image
            src="/logo-boru.png"
            alt="BORU studio"
            width={1376}
            height={1600}
            className="h-9 w-auto"
            sizes="40px"
            priority
          />
        </a>
        <p className="occhiello mt-10">Lavori</p>
        <p className="testo-tenue mt-4 max-w-xl text-lg leading-relaxed">
          Alcune delle cose che abbiamo costruito. Ogni progetto è partito da un
          processo che qualcuno faceva a mano.
        </p>
      </header>

      <GrigliaProgetti />
    </main>
  );
}
