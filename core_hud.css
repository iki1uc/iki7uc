// ANKER-FREE / CORE-ARBITER v2
// Entscheidet, welcher Weg sprechen darf
// und erzeugt 2× Resümee + finalen Output
// MIT Item-Name + Molekül-Name

export function ANKER_FREE(wege){

    // 1. Nur Wege nehmen, die gemeldet haben (TECH_OK)
    const aktive = wege.filter(w => w.ok === true);

    // 2. Wenn kein Weg aktiv ist → Fehler-Resümee
    if(aktive.length === 0){
        return {
            sprache: "Keine aktive Technik verfügbar.",
            resA: "0 aktive Wege",
            resB: "System wartet auf gültige Meldung.",
            tech: null,
            item: null,
            molekuel: null
        };
    }

    // 3. Wege nach Priorität sortieren (höchste zuerst)
    const beste = aktive.sort((a,b)=> b.prio - a.prio)[0];

    // 4. ANKER-FREE erzeugt 2× Resümee
    const resA = beste.snapshot || "kein Snapshot";
    const resB = `gewählt wegen: ${beste.reason || "höchste Priorität"}`;

    // 5. Finaler Output MIT Item + Molekül
    return {
        sprache: beste.output,
        resA,
        resB,
        tech: beste.name,
        item: beste.itemName || "unbekanntes Item",
        molekuel: beste.molekuelName || "unbekanntes Molekül"
    };
}

