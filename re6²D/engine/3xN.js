/* 3×N ENGINE – PURE VERSION (kein export, kein import)
   Ziel: Eine saubere, DOM‑freie, UI‑freie Engine,
   die N‑Durchläufe über 3 Achsen (rew, me, for) erzeugt.
*/

const AXES = ["rew", "me", "for"];

/* Erzeugt eine 3×N‑Sequenz */
function build3xN(N, payload){
    const seq = [];

    for(let round = 1; round <= N; round++){
        for(let i = 0; i < AXES.length; i++){
            const key = AXES[i];

            seq.push({
                id: `${key.toUpperCase()}_R${round}`,
                round,
                index: seq.length,
                axis: key,
                data: payload[key] ?? null
            });
        }
    }

    return seq;
}

/* Holt ein Element aus der 3×N‑Sequenz */
function get3xN(seq, index){
    if(index < 0 || index >= seq.length){
        return {
            status: "OUT_OF_RANGE",
            index,
            item: null
        };
    }

    return {
        status: "OK",
        index,
        item: seq[index]
    };
}

/* Mini‑Router für rew/me/for */
function axisRouter(axis){
    if(axis === "rew") return -1;
    if(axis === "for") return +1;
    return 0; // me
}

