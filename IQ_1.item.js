import { EVENTS } from "./events.js";

// alle Techniken importieren
import { TECH_START8 } from "./technik_start8.js";
import { TECH_6IY } from "./technik_6iy.js";
// … hier kommen deine weiteren 6 Techniken rein

export const TECHMAP = {

    // 8 Techniken
    techniken: {
        start8: TECH_START8,
        "6iy": TECH_6IY,
        // "t3": TECH_T3,
        // "t4": TECH_T4,
        // "t5": TECH_T5,
        // "t6": TECH_T6,
        // "t7": TECH_T7,
        // "t8": TECH_T8
    },

    // Zuordnung Technik → Über‑Anker
    // jede Technik hat 8 mögliche Outputs
    ueberAnker: {
        start8: [
            "anker_1","anker_2","anker_3","anker_4",
            "anker_5","anker_6","anker_7","anker_8"
        ],
        "6iy": [
            "anker_9","anker_10","anker_11","anker_12",
            "anker_13","anker_14","anker_15","anker_16"
        ]
        // weitere Techniken → weitere 8er‑Blöcke
    },

    // Technik feuert → Output kommt rein
    registerOutput(techName, outputIndex){
        const anchors = this.ueberAnker[techName];
        if(!anchors){
            console.log("UNBEKANNT:", techName);
            return;
        }

        const ankerId = anchors[outputIndex];
        if(!ankerId){
            console.log("OUTPUT FEHLT:", techName, outputIndex);
            return;
        }

        // Event für Lernspeicher, Koop, Gegenkoop
        EVENTS.trigger("technik_output", {
            tech: techName,
            index: outputIndex,
            anker: ankerId
        });

        // Übeltäter‑Erkennung
        console.log("ÜBELTÄTER:", techName, "→", ankerId);

        // Anker leuchten lassen
        if(window.ANKER && window.ANKER[ankerId]){
            window.ANKER[ankerId].leuchten(true);
        }
    }
};
