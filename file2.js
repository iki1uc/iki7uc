// /global/technik_6iy.js
import { EVENTS } from "./events.js";
import { TECHMAP } from "./techmap.js";

export const TECH_6IY = {
    id: "6iy",
    aktiv: false,

    start(){
        this.aktiv = true;

        // Startsignal
        EVENTS.trigger("technik_start", { tech: "6iy" });

        // 8 mögliche Outputs
        const outputs = [
            "impuls_A",
            "impuls_B",
            "impuls_C",
            "impuls_D",
            "impuls_E",
            "impuls_F",
            "impuls_G",
            "impuls_H"
        ];

        const index = Math.floor(Math.random()*8);

        // TECHMAP informieren
        TECHMAP.registerOutput("6iy", index);

        // Über‑Anker weiterleiten
        EVENTS.trigger("ueber_anker_signal", {
            tech: "6iy",
            index
        });
    }
};
