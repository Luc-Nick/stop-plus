"use client";

import { useState } from "react";
import categorias from "@/data/categorias.json";
import { randomItem } from "@/utils/random";
import HomeBtn from "@/components/HomeBtn";

export default function Clasicas() {
  const [categoria, setCategoria] = useState("");
  const [disponibles, setDisponibles] = useState<string[]>([...categorias]);
  const [historial, setHistorial] = useState<string[]>([]);

  function generar() {
    if (disponibles.length === 0) {
      setCategoria("No quedan categorías disponibles");
      return;
    }

    const nueva = randomItem(disponibles);
    setCategoria(nueva);

    setDisponibles((prev) => prev.filter((item) => item !== nueva));
    setHistorial((prev) => [...prev, nueva]);
  }

  return (
    <section
      className="hero min-h-screen relativa"
      style={{
        backgroundImage: "url(/images/bg-light.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <HomeBtn />
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-primary text-shadow-md text-shadow-secondary">
            {categoria || "Categoría"}
          </h1>
          <p className="mb-5 font-bold text-lg text-white">
            {categoria
              ? "Aquí tienes tu palabra"
              : "Pulsa el botón para generar una categoría"}
          </p>
          <button className="btn btn-primary" onClick={generar}>
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