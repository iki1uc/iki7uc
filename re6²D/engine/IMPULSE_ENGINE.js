// IMPULSE ENGINE – PURE VERSION (kein export, kein import)

// Multiplikatoren-Tabelle
const MULT = {
    "F2": 2,
    "R1": -1,
    "M4": 4,
    "M8": 8,
    "M16": 16,
    "M128": 128
};

// 16 Bahnen in Reihenfolge
const LANES = [
    "F2","R1","M4","M8",
    "M16","M128","F2","R1",
    "M4","M8","M16","M128",
    "F2","R1","M4","M8"
];

// PURE ENGINE – keine Module
function processImpulse(data){
    const { value, direction, mult } = data;

    // 1) Richtung bestimmen
    const dir = direction === "reverse" ? -1 : 1;

    // 2) Basiswert
    let base = value * dir * mult;

    // 3) Alle 16 Bahnen berechnen
    const lanes = LANES.map(code => {
        const factor = MULT[code];
        return {
            code,
            factor,
            result: base * factor
        };
    });

    return {
        mode: direction,
        input: data,
        lanes
    };
}
