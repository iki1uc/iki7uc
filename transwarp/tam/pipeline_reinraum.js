
// /tam/pipeline_reinraum.js
// 4‑Phasen‑Pipeline: HUHN → EI → OMELETT → SATT
// Auto‑Zoom, 4‑Layer‑Versatz, alle 3 Konstanten gleichberechtigt

import { paket_prime } from "./3xX_prime.js";
import { paket_pi }    from "./3xX_pi.js";
import { paket_e }     from "./3xX_e.js";

// ---------------- HUHN (Rohdaten, Märchen bleibt rein) ----------------

function HUHN() {
  return {
    prime: paket_prime,
    pi: paket_pi,
    e: paket_e
  };
}

// ---------------- EI (4‑Layer‑Versatz + Zoom) ----------------

function buildLayer(paket, zoom, offset) {
  const out = [];
  for (const it of paket.items) {
    out.push({
      item: it.item + "_z" + zoom + "_o" + offset,
      molekuel: it.molekuel,
      ort: it.ort,
      zoom,
      offset
    });
  }
  return out;
}

function EI(huhn, zoom) {
  const L = [];

  // 4‑Layer‑System: alle 3 Konstanten gleichberechtigt
  L.push(...buildLayer(huhn.prime, zoom, 0));
  L.push(...buildLayer(huhn.pi,    zoom, 1));
  L.push(...buildLayer(huhn.e,     zoom, 2));
  L.push(...buildLayer(huhn.prime, zoom * 2, 3)); // verstärkter Layer

  return L;
}

// ---------------- OMELETT (Hash + XOR → Zahl) ----------------

function hashString(str) {
  let h = 0 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 131 + str.charCodeAt(i)) >>> 0;
  }
  return h >>> 0;
}

function OMELETT(layers) {
  let acc = 0 >>> 0;
  for (const it of layers) {
    const s = `${it.item}|${it.molekuel}|${it.ort}|${it.zoom}|${it.offset}`;
    acc = (acc ^ hashString(s)) >>> 0;
  }
  return acc >>> 0;
}

// ---------------- SATT (Primzahl‑Extraktion) ----------------

function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function prevPrime(n) {
  let x = n;
  while (x >= 2 && !isPrime(x)) x--;
  return x >= 2 ? x : null;
}

function SATT(omelettZahl) {
  return {
    basis: omelettZahl,
    primzahl: prevPrime(omelettZahl)
  };
}

// ---------------- Auto‑Zoom (selbstskalierend) ----------------

let zoomCounter = 0;

function nextZoom() {
  zoomCounter++;
  const cycle = zoomCounter % 3;
  if (cycle === 1) return 1;
  if (cycle === 2) return 2;
  return 4;
}

// ---------------- Pipeline‑Exports ----------------

export function runPipelineOnce() {
  const zoom = nextZoom();
  const huhn = HUHN();
  const ei = EI(huhn, zoom);
  const omelett = OMELETT(ei);
  const satt = SATT(omelett);

  return {
    zoom,
    huhn,
    ei,
    omelett,
    satt
  };
}
