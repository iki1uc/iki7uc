// CUBE-SHIFT – System-Version
// ID: CUBE-SHIFT / ROLE: OS-Layer

const CUBE_ID = "CUBE-SHIFT";
const ROLE = "OS-Layer";

let STATE = localStorage.getItem("SHIFT_STATE") || "idle";

function shiftGetSchiene() {
  return {
    prev: localStorage.getItem("PREV") || "unknown",
    now: "SHIFT",
    next: localStorage.getItem("NEXT") || "unknown"
  };
}

function shiftCore(input) {
  return {
    cube: CUBE_ID,
    role: ROLE,
    in: input,
    state: STATE,
    schiene: shiftGetSchiene(),
    out: `SHIFT(${input})`
  };
}

function shift_out(data) {
  document.getElementById("out").innerHTML = `
    <h2>CUBE-SHIFT – System</h2>
    <p><b>IN:</b> ${data.in}</p>
    <p><b>OUT:</b> ${data.out}</p>
    <p><b>STATE:</b> ${data.state}</p>
    <p><b>SCH:</b> ${data.schiene.prev} → SHIFT → ${data.schiene.next}</p>
  `;
}
// --- OS: SHIFT kann LIVE starten ---
function shiftStartLIVE() {
  localStorage.setItem("PREV", "SHIFT");
  localStorage.setItem("NEXT", "LIVE");

  const script = document.createElement("script");
  script.src = "live.js";
  document.head.appendChild(script);

  script.onload = () => {
    const result = liveCore("from SHIFT");
    shift_out({
      ...result,
      out: "SHIFT → LIVE gestartet"
    });
  };
}

// --- OS: SHIFT kann LIVE stoppen und zurückkehren ---
function shiftReturn() {
  localStorage.setItem("PREV", "LIVE");
  localStorage.setItem("NEXT", "SHIFT");

  const result = shiftCore("return");
  shift_out(result);
}
