// A <-> B Ping-Pong
let abToggle = true;
setInterval(() => {
  currentMode = abToggle ? "A" : "B";
  abToggle = !abToggle;
  renderUI();
}, 800);

// ZEIT-SPRUNG
function timeJump() {
  currentMode = "A";
  renderUI();

  setTimeout(() => {
    currentMode = "B";
    renderUI();
  }, 120);

  setTimeout(() => {
    currentMode = "E";
    renderUI();
  }, 240);

  setTimeout(() => {
    currentMode = "A";
    renderUI();
  }, 600);
}

// Auto-Zeit-Sprung
setInterval(timeJump, 10000);
