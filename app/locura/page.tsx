"use client";

import { useState } from "react";
import frases from "@/data/frases.json";
import { randomItem } from "@/utils/random";
import Link from "next/link";

export default function Frase() {
  const [frase, setFrase] = useState("");

  function generar() {
    setFrase(randomItem(frases));
  }

  return (
    <section
      className="hero min-h-screen relative"
      style={{
        backgroundImage:
          "url(/images/bg-dark.jpg)" ,
      }}
    > 
      <div className="hero-overlay bg-opacity-60"></div>
        <Link href="/">
          <button className="btn btn-dash btn-info absolute top-4 left-4">
            Home
          </button>
        </Link>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-accent text-shadow-md text-shadow-primary">
            {frase || "Completa la frase"}
          </h1>
          <p className="mb-5 font-bold text-lg text-white">
            {frase
              ? "Aquí tienes tu frase"
              : "Pulsa el botón para generar una frase"}
          </p>
          <button className="btn btn-accent" onClick={generar}>
            Generar
          </button>
        </div>
      </div>
    </section>
  );
}