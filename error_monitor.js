import { EVENTS } from "./events.js";
import { TECH_NIEX8 } from "./technik_niE.x8.js";
import { TECH_6IY } from "./technik_6iy.js";

export const ALL4ALL = {
    active: false,
    anker: [],
    watson: false,

    init(alleAnker){
        this.anker = alleAnker;
    },

    on(){
        this.active = true;
        this.watson = true;

        console.log("ALL4ALL → AKTIV");
        console.log("WATSON → LEUCHTET");

        // 128 Anker leuchten
        this.anker.forEach(a => a.leuchten(true));

        // Event für Märchen
        EVENTS.trigger("all4all_start", { time: Date.now() });

        // Techniken starten
        TECH_NIEX8.start();
        TECH_6IY.start();
    },

    off(){
        this.active = false;
        this.watson = false;

        console.log("ALL4ALL → AUS");
        console.log("WATSON → DUNKEL");

        this.anker.forEach(a => a.leuchten(false));
    }
};
