// UNIVERSALER BAUARBEITER FÜR OP, iki1uc, iki2li
// erzeugt Items, Moleküle, Aufstellung aus RAUM.yml + WURF.root.yml

export async function generator() {

    // 1) RAUM laden (81%)
    const raum = await fetch("/yml/RAUM.yml")
        .then(r => r.text())
        .then(t => jsyaml.load(t));

    const seg = raum.raum.segmente;

    // 2) Items erzeugen (3×27%)
    const items = {
        OP: makeItem("OP", seg.OP),
        iki1uc: makeItem("iki1uc", seg.iki1uc),
        iki2li: makeItem("iki2li", seg.iki2li)
    };

    // 3) Molekül erzeugen (81)
    const molekuel = makeMolekuel(items);

    // 4) Datei erkennen (ID = 81, INDEX = 81(1))
    const file = window.location.pathname.toLowerCase();

    let aufstellung;

    if (file.includes("index.html")) {
        // Kontrollschicht laden (1%)
        const wurf = await fetch("/yml/WURF.root.yml")
            .then(r => r.text())
            .then(t => jsyaml.load(t));

        aufstellung = makeAufstellung(molekuel, wurf.wurf.kontrollschicht);
    } else {
        // ID.html oder andere → nur 81
        aufstellung = makeAufstellung(molekuel, null);
    }

    return {
        items,
        molekuel,
        aufstellung
    };
}


// ------------------------------------------------------------
// ITEM
// ------------------------------------------------------------
function makeItem(name, seg) {
    return {
        name,
        share: seg.share,
        fragment: seg.fragment,
        operator: seg.operator,
        bind: seg.bind
    };
}


// ------------------------------------------------------------
// MOLEKÜL (81%)
// ------------------------------------------------------------
function makeMolekuel(items) {
    return {
        mode: "81",
        share: 0.81,
        parts: items
    };
}


// ------------------------------------------------------------
// AUFSTELLUNG (81 oder 81(1))
// ------------------------------------------------------------
function makeAufstellung(molekuel, kontroll) {

    if (!kontroll) {
        return {
            mode: "81",
            share: 0.81,
            molekuel
        };
    }

    return {
        mode: "81(1)",
        share: 0.82,
        molekuel,
        kontroll
    };
}
