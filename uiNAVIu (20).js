import { MolekuelGeburt } from "./verhandlung-core.js";

window.addEventListener("DOMContentLoaded", () => {

  // 81-Felder-UI erzeugen
  const wrap = document.getElementById("cube81");
  for (let i = 0; i < 81; i++) {
    const cell = document.createElement("div");
    cell.className = "cube81-cell";
    cell.textContent = i + 1;
    wrap.appendChild(cell);
  }

  // Molekül erzeugen
  const A = { id: "A", marker: ["QI"] };
  const B = { id: "B", marker: ["Orbit"] };
  const C = { id: "C", marker: ["OP"] };

  const M = MolekuelGeburt(A, B, C);

  // Ein Feld hervorheben – ruhig, minimal
  const cells = document.querySelectorAll(".cube81-cell");
  const index = Math.floor(Math.random() * 81);
  cells[index].classList.add("active");

  // Ausgabe
  document.getElementById("out").textContent =
    "Molekül Zustand: " + M.state;
});
