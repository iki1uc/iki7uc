// 4d_live_pipeline.js
import { map_4d } from "./me4.js";

window.SEEU = window.SEEU || {};

window.SEEU_4D_LIVE = function(state, fn){
  // 1) 4D-Mapping
  const mapped = map_4d(state, fn); // { value, time, dim:"4D" }

  // 2) SHIFT-LIVE Kern
  const core = liveCore(mapped.value); // aus live.js

  // 3) UI-Ausgabe
  live_out(core);

  // 4) ALL4ALL-Routing
  if (window.live_toA4A) window.live_toA4A(core);

  return { mapped, core };
};

