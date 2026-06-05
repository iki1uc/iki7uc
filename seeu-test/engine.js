let currentMode = "A";
let isRendering = false;

// verhindert, dass Buttons überschrieben werden
let manualOverride = false;
let overrideTimer = null;

function showState() {
  console.log("MODE:", currentMode);
}

function renderUI() {
  if (isRendering) return;
  isRendering = true;

  const row = lines[Math.floor(Math.random() * lines.length)];
  const ui = document.getElementById("mainUI");
  ui.style.transition = "0.3s";

  switch (currentMode) {
    case "A":
      ui.style.background = "#222";
      renderDOM(document.getElementById("topLine"), row);
      break;

    case "B":
      ui.style.background = "#004";
      renderCanvas(document.getElementById("bottomLine1"), row);
      break;

    case "C":
      ui.style.background = "#040";
      renderSVG(document.getElementById("bottomLine2"), row);
      break;

    case "D":
      ui.style.background = "#400";
      renderCSS(document.getElementById("mainUI"), row);
      break;

    case "E":
      ui.style.background = "#660";
      break;
  }

  isRendering = false;
}

function setMode(mode) {
  manualOverride = true;
  currentMode = mode;
  renderUI();

  clearTimeout(overrideTimer);
  overrideTimer = setTimeout(() => {
    manualOverride = false;
  }, 3000); // 3 Sekunden Schutz
}

// -----------------------------
// AUTO-PING-PONG
// -----------------------------
let abToggle = true;

setInterval(() => {
  if (manualOverride) return;
  currentMode = abToggle ? "A" : "B";
  abToggle = !abToggle;
  renderUI();
}, 800);

// -----------------------------
// ZEIT-SPRUNG
// -----------------------------
function timeJump() {
  if (manualOverride) return;

  currentMode = "A";
  renderUI();

  setTimeout(() => {
    if (manualOverride) return;
    currentMode = "B";
    renderUI();
  }, 120);

  setTimeout(() => {
    if (manualOverride) return;
    currentMode = "E";
    renderUI();
  }, 240);

  setTimeout(() => {
    if (manualOverride) return;
    currentMode = "A";
    renderUI();
  }, 600);
}

setInterval(timeJump, 10000);
