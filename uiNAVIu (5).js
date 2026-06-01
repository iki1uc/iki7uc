<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>iki – Zukunft + ALL4ALL</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">

  <link rel="stylesheet" href="../core/core_hud.css">

  <!-- GLOBAL SYSTEM -->
  <script type="module">
    import { EVENTS } from "../global/events.js";
    import "../global/maerchen.js";
    import "../global/maerchen_render.js";
    import { GLOBAL_ALL4ALL, ALL4ALL } from "../global/all4all.js";
    import "../global/error_monitor.js";
    import "../global/error_display.js";
    import "../global/edge_injection_detector.js";
  </script>

  <style>
    body{
      margin:0;padding:2rem;
      background:#000;color:#fff;
      font-family:system-ui,sans-serif;
      text-align:center;
    }
    .wrap{max-width:900px;margin:0 auto;margin-top:40px}
    .title{font-size:40px;margin-bottom:18px}
    .story{font-size:20px;line-height:1.45;min-height:160px}
    .controls{margin-top:28px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
    button{background:#0b1220;color:#7dd3fc;border:1px solid #1f2937;padding:10px 18px;font-size:16px;cursor:pointer}
    a{color:#7dd3fc;text-decoration:none;font-size:15px}
    .small{font-size:16px;color:#9ca3af}
    #anker-grid {
      display:grid;
      grid-template-columns:repeat(16,22px);
      gap:3px;
      margin:20px auto 0;
      width:fit-content;
    }
    .anker-box {
      width:22px;height:22px;
      font-size:11px;line-height:22px;
      text-align:center;
      background:#222;color:#888;
      border-radius:3px;
    }
    .anker-box.on {
      background:#0f0;color:#000;font-weight:bold;
    }
    #info{
      margin-top:10px;
      font-family:monospace;
      color:#0ff;
      font-size:14px;
    }
  </style>
</head>

<body>

<h3>GLOBAL ALL4ALL – 128 ANKER</h3>
<div id="info">System lädt…</div>
<div id="anker-grid"></div>

<div class="wrap">
  <div class="title">iki – was kommen könnte</div>
  <div id="story" class="story"></div>

  <div class="controls">
    <button id="regen">KlicK – neue Variante</button>
    <button id="regenSlow">KlicK mit Pause</button>
    <a href="../uc/uc.html">← Vergangenheit</a>
    <a href="../1/1.html">Jetzt</a>
    <a href="../index.html">Ereignishorizont →</a>
  </div>

  <div class="small" id="meta"></div>
</div>

<div id="systemErrorBox" style="
  display:none;
  background:#330;
  color:#ff0;
  padding:10px;
  margin:10px auto;
  max-width:900px;
  font-family:monospace;
  border:1px solid #660;
"></div>

<!-- 128 ANKER + SIGNAL-ECHO -->
<script type="module">
import { GLOBAL_ALL4ALL, ALL4ALL } from "../global/all4all.js";
import { createAnker } from "../global/anker.js";

const grid = document.getElementById("anker-grid");
const info = document.getElementById("info");

const alleAnker = [];

for(let i = 1; i <= 128; i++){
  const a = createAnker("anker_" + i);
  alleAnker.push(a);

  const box = document.createElement("div");
  box.className = "anker-box";
  box.textContent = i;
  box.dataset.id = a.id;
  grid.appendChild(box);

  a.leuchten = function(state){
    this.leuchtet = state;
    box.classList.toggle("on", !!state);
  };
}

// ALL4ALL mit Ankern verbinden
GLOBAL_ALL4ALL.init(alleAnker);

// Signal‑Echo: zeigt, ob Technik wirklich läuft
window.onload = () => {
  info.textContent = "System gestartet – ALL4ALL init";
  GLOBAL_ALL4ALL.on();
  ALL4ALL.on();
  info.textContent = "ALL4ALL aktiv – Anker: " + alleAnker.length;
};
</script>

<!-- STORY ENGINE -->
<script src="../anchor_engine.js"></script>
<script type="module" src="IQ_1.item.js"></script>

<script>
  document.getElementById("regen").addEventListener("click", ()=>{
    halt("iki_click_fast");
  });

  document.getElementById("regenSlow").addEventListener("click", ()=>{
    halt("iki_click_slow");
  });

  if(typeof STATION_PRUEFUNG==="function"){
    STATION_PRUEFUNG("iki","PI");
  }
</script>

<script src="../core/core_halt.js"></script>
<script src="../core/core_navi.js"></script>
<script src="../core/core_bigcube.js"></script>
<script src="../core/core_scanner.js"></script>
<script src="../core/core_station.js"></script>

</body>
</html>
