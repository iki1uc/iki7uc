// 1) Datenrahmen: Item, Molekül, Ordner, Ort
const items = [
    { item: "huhn_1",    molekuel: "Ursprung",     ordner: "zyklus1/huhn",    ort: "r0c0" },
    { item: "huhn_2",    molekuel: "Impuls",       ordner: "zyklus1/huhn",    ort: "r0c1" },
    { item: "huhn_3",    molekuel: "Möglichkeit",  ordner: "zyklus1/huhn",    ort: "r0c2" },

    { item: "ei_1",      molekuel: "Form",         ordner: "zyklus1/ei",      ort: "r1c0" },
    { item: "ei_2",      molekuel: "Grenze",       ordner: "zyklus1/ei",      ort: "r1c1" },
    { item: "ei_3",      molekuel: "Potenzial",    ordner: "zyklus1/ei",      ort: "r1c2" },

    { item: "omelett_1", molekuel: "Handlung",     ordner: "zyklus1/omelett", ort: "r2c0" },
    { item: "omelett_2", molekuel: "Wandel",       ordner: "zyklus1/omelett", ort: "r2c1" },
    { item: "omelett_3", molekuel: "Übergang",     ordner: "zyklus1/omelett", ort: "r2c2" }
];

// 2) Orts‑Mapping
const grid = {
    r0c0: document.getElementById("r0c0"),
    r0c1: document.getElementById("r0c1"),
    r0c2: document.getElementById("r0c2"),

    r1c0: document.getElementById("r1c0"),
    r1c1: document.getElementById("r1c1"),
    r1c2: document.getElementById("r1c2"),

    r2c0: document.getElementById("r2c0"),
    r2c1: document.getElementById("r2c1"),
    r2c2: document.getElementById("r2c2")
};

// 3) Beam‑Funktion
function beam(item) {
    const slot = grid[item.ort];
    if (!slot) return;
    slot.textContent = item.molekuel;
}

// 4) Klick → alle 9 Items beamen
document.getElementById("btn").onclick = () => {
    items.forEach(beam);
};

