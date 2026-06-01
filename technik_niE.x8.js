import { TECH_NIEX8 } from "./technik_niE.x8.js";
import { TECH_6IY } from "./technik_6iy.js";

export const TECHMAP = {
    techniken: {
        "niE.x8": TECH_NIEX8,
        "6iy": TECH_6IY
    },

    ueberAnker: {
        "niE.x8": [
            "anker_1","anker_2","anker_3","anker_4",
            "anker_5","anker_6","anker_7","anker_8"
        ],
        "6iy": [
            "anker_9","anker_10","anker_11","anker_12",
            "anker_13","anker_14","anker_15","anker_16"
        ]
    },

    registerOutput(techName, index){
        const anchors = this.ueberAnker[techName];
        if(!anchors) return;

        const ankerId = anchors[index];
        if(!ankerId) return;

        EVENTS.trigger("technik_output", { tech: techName, index, anker: ankerId });

        if(window.ANKER && window.ANKER[ankerId]){
            window.ANKER[ankerId].leuchten(true);
        }
    }
};

