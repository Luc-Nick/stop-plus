import Link from "next/link";
import { dynaPuff } from "@/app/fonts";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(/images/bg-dark.jpg)" }}
    >
      <div className="hero-overlay "></div>
      <div
        className="hero-content p-0 flex-col text-center"
      >
        <div
          className="h-96 w-screen flex items-center justify-center"
          style={{
            backgroundImage: "url(/images/shape-azul.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <h1 className={`${dynaPuff.className} text-6xl font-bold text-accent uppercase text-center pl-6`}>
            Stop <br />Plus
          </h1>
        </div>

        <Link href="/clasicas">
          <button className="btn btn-lg btn-primary">
            Categorías clásicas
          </button>
        </Link>

        <Link href="/caos">
          <button className="btn btn-lg btn-secondary">
            Modo caos
          </button>
        </Link>

        <Link href="/locura">
          <button className="btn btn-lg btn-accent">
            Completa la frase
          </button>
        </Link>
      </div>
    </div>
  );
}