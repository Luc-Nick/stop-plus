"use client";

import { useState } from "react";
import frases from "@/data/frases.json";
import { randomItem } from "@/utils/random";
import HomeBtn from "@/components/HomeBtn";

export default function Frase() {
  const [frase, setFrase] = useState("");
  const [disponibles, setDisponibles] = useState<string[]>([...frases]);
  const [historial, setHistorial] = useState<string[]>([]);

  function generar() {
    if (disponibles.length === 0) {
      setFrase("No quedan frases disponibles");
      return;
    }

    const nueva = randomItem(disponibles);
    setFrase(nueva);

    setDisponibles((prev) => prev.filter((item) => item !== nueva));
    setHistorial((prev) => [...prev, nueva]);
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
          {historial.length > 0 && (
            <div className="mt-8 text-sm text-white">
              <h3 className="text-lg font-semibold">Historial</h3>
              {historial.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}