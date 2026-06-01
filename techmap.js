import { EVENTS } from "./events.js";

export const MAERCHEN = {
    maerchenPool: [
        "Es war einmal ein Funke, der größer war als die Nacht.",
        "Im Schatten einer alten Straße begann etwas Neues zu atmen.",
        "Ein kleiner Fehler wurde zu einer großen Wahrheit.",
        "Zwischen zwei Welten öffnete sich ein stiller Raum.",
        "Ein verlorener Gedanke fand seinen Weg zurück.",
        "Ein Herz erinnerte sich an etwas, das nie gesagt wurde.",
        "Ein Schritt zu früh wurde zu einem Schritt genau richtig.",
        "Ein Augenblick wurde zu einer ganzen Geschichte."
    ],

    konsequenzPool: [
        "Und seitdem trägt jemand ein Licht, das vorher nicht da war.",
        "Und eine Entscheidung wurde klarer, als sie je zuvor war.",
        "Und etwas Altes verlor seine Macht.",
        "Und ein neuer Weg wurde sichtbar.",
        "Und ein Fehler wurde zu einer Richtung.",
        "Und ein Schatten wurde kleiner.",
        "Und ein Herz wurde leichter.",
        "Und ein Kreis schloss sich."
    ],

    r(a){ return a[Math.floor(Math.random()*a.length)] },

    fire(){
        const text = this.r(this.maerchenPool);
        const folge = this.r(this.konsequenzPool);

        EVENTS.trigger("maerchen_output", {
            text,
            folge,
            time: Date.now()
        });
    }
};

// Reagiert auf ALLES
EVENTS.on("technik_output", () => MAERCHEN.fire());
EVENTS.on("technik_start", () => MAERCHEN.fire());
EVENTS.on("ueber_anker_signal", () => MAERCHEN.fire());
EVENTS.on("all4all_start", () => MAERCHEN.fire());
EVENTS.on("cube_live", () => MAERCHEN.fire());
