import Image from "next/image";
import { IndiceProgetti } from "@/components/indice-progetti";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col px-5 py-8 md:px-12 md:py-10">
      <header className="relative z-10 flex items-center justify-between">
        <a
          href="https://borustudio.it"
          className="transition-opacity hover:opacity-70"
        >
          <Image
            src="/logo-boru.png"
            alt="BORU studio"
            width={1376}
            height={1600}
            sizes="40px"
            className="h-9 w-auto"
            priority
          />
        </a>
        <p className="occhiello">Lavori</p>
      </header>

      <div className="flex flex-1 items-center py-16 md:py-12">
        <IndiceProgetti />
      </div>

      <footer className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="testo-tenue max-w-md text-sm">
          Ogni progetto è partito da un processo che qualcuno faceva a mano.
        </p>
        <a
          href="https://borustudio.it"
          className="occhiello transition-colors hover:text-azzurro"
        >
          borustudio.it &rarr;
        </a>
      </footer>
    </main>
  );
}
