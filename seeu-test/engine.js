// --- Basiszustand -------------------------------------------------

const PARZELLEN = [
  { id: 0, name: "P0", state: "idle", ticks: 0 },
  { id: 1, name: "P1", state: "idle", ticks: 0 },
  { id: 2, name: "P2", state: "idle", ticks: 0 }
];

let firstLoopWinner = null;   // welche Technik startet als erste einen Kreislauf?
const LOOP_THRESHOLD = 3;     // ab wie vielen Ticks gilt "Kreislauf gestartet"?

// --- Techniken (A, B, B) ------------------------------------------

const TECHNIKEN = {
  A: {
    name: "Technik A",
    apply(parzelle) {
      // einfache, markante Änderung
      parzelle.state = "A_ACTIVE";
      parzelle.ticks = 0;
    }
  },
  B: {
    name: "Technik B",
    apply(parzelle) {
      parzelle.state = "B_ACTIVE";
      parzelle.ticks = 0;
    }
  }
  // C könntest du später ergänzen
};

// --- Logging ------------------------------------------------------

const logEl = document.getElementById("log");
function log(msg) {
  logEl.textContent += msg + "\n";
}

// --- Trigger-Handler ----------------------------------------------

function handleTrigger(techKey, slotIndex) {
  const tech = TECHNIKEN[techKey];
  const parzelle = PARZELLEN[slotIndex];

  if (!tech || !parzelle) return;

  // Trigger = Push → Technik → Parzelle
  tech.apply(parzelle);
  log(`Trigger: ${tech.name} auf ${parzelle.name}`);

  // nach dem Apply simulieren wir ein paar Ticks
  simulateTicks(techKey, parzelle);
}

// --- Kreislauf-Simulation -----------------------------------------

function simulateTicks(techKey, parzelle) {
  for (let i = 0; i < LOOP_THRESHOLD; i++) {
    parzelle.ticks++;

    // hier super simpel: wenn Zustand gleich bleibt → Kreislauf
    const isLoop = parzelle.state.endsWith("_ACTIVE");

    if (isLoop && parzelle.ticks >= LOOP_THRESHOLD && !firstLoopWinner) {
      firstLoopWinner = techKey;
      log(`KREISLAUF gestartet von: ${TECHNIKEN[techKey].name} auf ${parzelle.name}`);
    }
  }
}

// --- Buttons verdrahten -------------------------------------------

document.querySelectorAll("button[data-tech]").forEach(btn => {
  btn.addEventListener("click", () => {
    const techKey = btn.dataset.tech;
    const slotIndex = Number(btn.dataset.slot);
    handleTrigger(techKey, slotIndex);
  });
});

