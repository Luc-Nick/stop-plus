"use client";

import { useState } from "react";
import categorias from "@/data/categorias.json";
import variables from "@/data/variables.json";
import { randomItem } from "@/utils/random";
import HomeBtn from "@/components/HomeBtn";

export default function Caos() {
  const [resultado, setResultado] = useState("");

  function generar() {
    const categoria = randomItem(categorias);
    const variable = randomItem(variables);

    setResultado(`${categoria} ${variable}`);
  }

  return (
    <section
      className="hero min-h-screen relative"
      style={{
        backgroundImage:
          "url(/images/bg-light.jpg)" ,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
        <HomeBtn />
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-secondary text-shadow-md text-shadow-accent">
            {resultado || "Modo Caos"}
          </h1>
          <p className="mb-5 font-bold text-lg text-white">
            {resultado
              ? "Aquí tienes tu combinación caótica"
              : "Pulsa el botón para generar una combinación"}
          </p>
          <button className="btn btn-secondary" onClick={generar}>
            Generar
          </button>
        </div>
      </div>
    </section>
  );
}