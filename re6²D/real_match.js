// real_match.js
import { rcalc } from "./rcalc.js";

// real_match = zentraler Router
export function real_match(event){

    // 1) Impuls unverändert übernehmen
    const state = event.state ?? event;

    // 2) Richtung bestimmen (forward/backward/neutral)
    const direction = event.direction ?? "neutral";

    // 3) an rcalc weiterleiten (Vor/Rück Entscheidung)
    const routed = rcalc({
        direction: direction,
        state: state
    });

    // 4) Ergebnis zurückgeben (NICHT verändern!)
    return {
        input: state,
        mode: routed.mode,
        output: routed.result
    };
}

