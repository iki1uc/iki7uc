import { paket } from "./tam/6iygo.js";

const grid = {
  r0c0: document.getElementById("r0c0"),
  r0c1: document.getElementById("r0c1"),
  r0c2: document.getElementById("r0c2"),
  r1c0: document.getElementById("r1c0"),
  r1c1: document.getElementById("r1c1"),
  r1c2: document.getElementById("r1c2"),
  r2c0: document.getElementById("r2c0"),
  r2c1: document.getElementById("r2c1"),
  r2c2: document.getElementById("r2c2")
};

function tam(item) {
  grid[item.ort].textContent = item.molekuel;
}

document.getElementById("btn").onclick = () => {
  paket.items.forEach(tam);
};
1
