let currentMode = "A";
let isRendering = false;

function showState() {
  console.log("MODE:", currentMode);
}

function renderUI() {
  if (isRendering) return;
  isRendering = true;

  showState();
  const row = lines[Math.floor(Math.random() * lines.length)];

  switch (currentMode) {
    case "A": renderDOM(document.getElementById("topLine"), row); break;
    case "B": renderCanvas(document.getElementById("bottomLine1"), row); break;
    case "C": renderSVG(document.getElementById("bottomLine2"), row); break;
    case "D": renderCSS(document.getElementById("mainUI"), row); break;
    case "E": resetUI(); break;
  }

  isRendering = false;
}

function setMode(mode) {
  if (currentMode === mode) return;
  currentMode = mode;
  renderUI();
}

function resetUI() {
  document.getElementById("topLine").innerHTML = "";
  document.getElementById("bottomLine1").innerHTML = "";
  document.getElementById("bottomLine2").innerHTML = "";
  document.getElementById("mainUI").innerHTML =
    "<h3 style='text-align:center;'>UI‑Fenster (33%)</h3>";
}

// UI läuft weiter
setInterval(renderUI, 1500);

// AUTO‑WECHSEL ABCDE
const modes = ["A", "B", "C", "D", "E"];
let modeIndex = 0;

setInterval(() => {
  modeIndex = (modeIndex + 1) % modes.length;
  setMode(modes[modeIndex]);
}, 3000);
