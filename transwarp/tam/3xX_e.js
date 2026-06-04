// /tam/pipeline_huhn_ei_omelett_satt.js
// 4‑Phasen‑Pipeline: HUHN → EI → OMELETT → SATT
// + Zoom‑Version, die sich selbst skaliert

// Annahme: deine 3xX‑Pakete
//   /tam/3xX_prime.js  → export const paket_prime
//   /tam/3xX_pi.js     → export const paket_pi
//   /tam/3xX_e.js      → export const paket_e   (optional, aber nice)

import { paket_prime } from "./3xX_prime.js";
import { paket_pi }    from "./3xX_pi.js";
import { paket_e }     from "./3xX_e.js"; // wenn noch nicht da: einfach Dummy bauen

// ---------------- HUHN (Rohdaten, Märchen bleibt unberührt) ----------------

function HUHN() {
  return {
    prime: paket_prime,
    pi: paket_pi,
    e: paket_e
  };
}

// ---------------- EI (2‑fach implementiert, 4‑fach versetzt + Zoom) ----------------

function buildLayer(paket, zoomFactor, offset) {
  // wir nehmen nur die Items, verändern aber NICHT das Original
  const base = paket.items;
  const out = [];

  for (let i = 0; i < base.length; i++) {
    const src = base[i];

    // einfacher Versatz + Zoom: Index verschoben + Zoom‑Tag
    out.push({
      item: src.item + "_z" + zoomFactor + "_o" + offset,
      molekuel: src.molekuel,
      ort: src.ort,
      zoom: zoomFactor,
      offset
    });
  }

  return out;
}

function EI(huhn) {
  const layers = [];

  // 4‑Layer‑System:
  // 1: Primzahl normal
  layers.push(...buildLayer(huhn.prime, 1, 0));
  // 2: π normal
  layers.push(...buildLayer(huhn.pi, 1, 1));
  // 3: Primzahl zoom ×2
  layers.push(...buildLayer(huhn.prime, 2, 2));
  // 4: π zoom ×2
  layers.push(...buildLayer(huhn.pi, 2, 3));

  // optional: e als fünfter Layer (kannst du auch weglassen)
  layers.push(...buildLayer(huhn.e, 1, 4));

  return layers;
}

// ---------------- OMELETT (Hash + XOR‑Kombi → Zahl) ----------------

function hashString(str) {
  let h = 0 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 131 + str.charCodeAt(i)) >>> 0;
  }
  return h >>> 0;
}

function OMELETT(layers) {
  // wir kombinieren alle Layer in einen Hash
  let acc = 0 >>> 0;

  for (const it of layers) {
    const s = `${it.item}|${it.molekuel}|${it.ort}|${it.zoom}|${it.offset}`;
    const h = hashString(s);
    acc = (acc ^ h) >>> 0;
  }

  // acc ist jetzt unsere „Omelett‑Zahl“
  return acc >>> 0;
}

// ---------------- SATT (prevPrime → Primzahl) ----------------

function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function prevPrime(n) {
  if (n < 2) return null;
  let x = n;
  while (x >= 2 && !isPrime(x)) x--;
  return x >= 2 ? x : null;
}

function SATT(omelettZahl) {
  const p = prevPrime(omelettZahl);
  return {
    primzahl: p,
    basis: omelettZahl
  };
}

// ---------------- Zoom‑Version, die sich selbst skaliert ----------------

// einfache Selbstskalierung: Zoom‑Level hängt von Grid‑Größe oder Aufrufzähler ab
let zoomCounter = 0;

function nextZoomFactor() {
  zoomCounter++;
  // z.B. zyklisch: 1 → 2 → 4 → 1 → ...
  const cycle = zoomCounter % 3;
  if (cycle === 1) return 1;
  if (cycle === 2) return 2;
  return 4;
}

export function runPipelineWithAutoZoom() {
  const zoom = nextZoomFactor();

  const huhn = HUHN();

  // EI mit dynamischem Zoom: wir ersetzen oben die festen Zooms durch diesen Wert
  const layers = [];
  layers.push(...buildLayer(huhn.prime, zoom, 0));
  layers.push(...buildLayer(huhn.pi, zoom, 1));
  layers.push(...buildLayer(huhn.e, zoom, 2));

  const omelett = OMELETT(layers);
  const satt = SATT(omelett);

  return {
    zoom,
    layers,
    omelett,
    satt
  };
}

// ---------------- Einfacher Export für „einmal durchlaufen“ ----------------

export function runPipelineOnce() {
  const huhn = HUHN();
  const ei = EI(huhn);
  const omelett = OMELETT(ei);
  const satt = SATT(omelett);

  return {
    huhn,
    ei,
    omelett,
    satt
  };
}

