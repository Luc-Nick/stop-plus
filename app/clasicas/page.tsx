"use client";

import { useState } from "react";
import categorias from "@/data/categorias.json";
import { randomItem } from "@/utils/random";
import HomeBtn from "@/components/HomeBtn";

export default function Clasicas() {
  const [categoria, setCategoria] = useState("");

  function generar() {
    setCategoria(randomItem(categorias));
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
      {/* <button class="btn btn-soft btn-info">Info</button> */}
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
        </div>
      </div>
    </section>
  );
}