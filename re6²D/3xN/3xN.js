// ===============================
// 0) KERN
// ===============================
export function processImpulse(data) {
    return {
        mode: data.direction,
        output: {
            value: data.value * data.mult
        }
    };
}

// ===============================
// 1) ITEM_ROUTER – VOLLVERSION
// ===============================
export function ITEM_ROUTER(m) {

    // --- 1) NAVI → Richtung bestimmen ---
    const direction =
        m.navi?.direction ??
        m.navi?.ui ??
        "neutral";

    // --- 2) PASSAGE → Multiplikatoren / Werte ---
    const value =
        m.impulse?.value ??
        m.passage?.in2 ??
        0;

    const mult =
        m.impulse?.mult ??
        m.passage?.in4 ??
        1;

    // --- 3) XX → Rohdaten / Signatur ---
    const xx = {
        roh: m.xx?.roh ?? "",
        signatur: m.xx?.signatur ?? "",
        länge: (m.xx?.signatur ?? "").length
    };

    // --- 4) 88 → Balance ---
    const balance = {
        links: m.acht88?.links ?? 0,
        rechts: m.acht88?.rechts ?? 0
    };

    // --- 5) TECH-Lanes (IDs + Codes) ---
    const tech = (m.tech ?? []).map(lane => ({
        id: lane.id,
        code: lane.code,
        name: lane.name
    }));

    // --- 6) KERN ausführen ---
    const coreInput = { direction, value, mult };
    const coreResult = processImpulse(coreInput);

    // --- 7) GESAMTPAKET zurückgeben ---
    return {
        pos: m.pos,
        meta: m.meta,
        xx,
        balance,
        tech,
        input: coreInput,
        core: coreResult
    };
}
