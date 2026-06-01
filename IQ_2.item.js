// 1.js – Clone‑1 Bewusstseinsmodul
// verbindet Clone 1 mit der Anker‑Engine und Koop‑Engine

console.log("Clone‑1 Modul geladen");

// --- Sicherstellen, dass Engine existiert ---
if (typeof STATION_PRUEFUNG !== "function") {
  console.error("Anker‑Engine nicht gefunden!");
} else {
  console.log("Anker‑Engine erkannt.");
}

// --- Clone-ID ---
const CLONE_ID = "1";

// --- Aktiver Anker (kann später dynamisch werden) ---
let activeAnchor = "PI";

// --- Station prüfen ---
function checkStation() {
  const info = STATION_PRUEFUNG(CLONE_ID, activeAnchor);
  console.log("Station‑Prüfung:", info);
  return info;
}

// --- Koop ↔ Gegen‑Koop anwenden ---
function applyKoop(content) {
  if (typeof ANKER_MODE !== "function") {
    console.warn("Koop‑Engine nicht gefunden.");
    return content;
  }

  const mode = ANKER_MODE(activeAnchor);
  const prefix = mode === "Koop" ? "🟢 " : "🔵 ";
  return prefix + content;
}

// --- Domino‑Schritt ---
function nextAnchor() {
  const info = STATION_PRUEFUNG(CLONE_ID, activeAnchor);
  activeAnchor = info.next;
  console.log("Nächster Anker:", activeAnchor);
  return activeAnchor;
}

// --- Halt / Aufgabe / Bestätigung ---
let lastEvent = null;

function halt(eventName = "unbenannt") {
  lastEvent = {
    clone: CLONE_ID,
    anchor: activeAnchor,
    event: eventName,
    time: Date.now()
  };

  console.log("⏸ HALT – Ereignis fixiert:", lastEvent);

  // Zeit-Impuls an BigCube senden (falls vorhanden)
  if (window.BigCube && typeof BigCube.onEvent === "function") {
    BigCube.onEvent(lastEvent);
  }

  return lastEvent;
}

function bestaetigen() {
  if (!lastEvent) {
    console.warn("Keine Ereignisse zum Bestätigen.");
    return null;
  }

  console.log("✔ BESTÄTIGT – Ereignis akzeptiert:", lastEvent);
  return lastEvent;
}

// --- Export für 1.html ---
window.Clone1 = {
  checkStation,
  applyKoop,
  nextAnchor,
  halt,
  bestaetigen
};

console.log("Clone‑1 Bewusstsein aktiv.");
