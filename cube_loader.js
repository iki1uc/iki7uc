// create4DLiveItem.js — 4D‑LIVE Molekül‑Item (all4all v7)

import { map_4d } from "./me4.js";
import { f_iki1uc } from "./iki1uc_op.js";

window.SEEU_ITEMS = window.SEEU_ITEMS || new Map();
window.SEEU_ITEM_CHANGED = window.SEEU_ITEM_CHANGED || function(){};

// ---------------------------------------------------------
// 4D‑LIVE Molekül‑Item
// ---------------------------------------------------------
export function create4DLiveItem(id, input){

  // 1) 4D‑Mapping (Zeit + Dimension)
  const mapped = map_4d({ value: input }, v => f_iki1uc(v));

  // 2) LIVE‑Motor (Zeitmotor)
  const core = liveCore(mapped.value);

  // 3) UI‑Ausgabe
  live_out(core);

  // 4) Molekül‑Item erzeugen
  const item = {
    id,
    dim: mapped.dim,       // "4D"
    time: mapped.time,     // performance.now()
    value: mapped.value,   // iki1uc‑transformierter Wert
    core,                  // LIVE‑Motor‑Daten

    // 5) all4all Snapshot
    snapshot(){
      return {
        id: this.id,
        dim: this.dim,
        time: this.time,
        value: this.value,
        core: this.core
      };
    }
  };

  // 6) Registry‑Eintrag
  window.SEEU_ITEMS.set(id, item);

  // 7) Veränderungs‑Signal
  window.SEEU_ITEM_CHANGED(id);

  return item;
}

