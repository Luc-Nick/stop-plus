"use client";

import { useState } from "react";
import frases from "@/data/frases.json";
import { randomItem } from "@/utils/random";

export default function Frase() {
  const [frase, setFrase] = useState("");

  function generar() {
    setFrase(randomItem(frases));
  }

  return (
    <main>
      <h1>Completa la frase</h1>

      <h2>{frase}</h2>

      <button onClick={generar}>Generar</button>
    </main>
  );
}