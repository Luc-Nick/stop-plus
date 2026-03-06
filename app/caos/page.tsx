"use client";

import { useState } from "react";
import categorias from "@/data/categorias.json";
import variables from "@/data/variables.json";
import { randomItem } from "@/utils/random";

export default function Caos() {
  const [resultado, setResultado] = useState("");

  function generar() {
    const categoria = randomItem(categorias);
    const variable = randomItem(variables);

    setResultado(`${categoria} ${variable}`);
  }

  return (
    <main>
      <h1>Modo Caos</h1>

      <h2>{resultado}</h2>

      <button onClick={generar}>Generar</button>
    </main>
  );
}