export function ITEM_ROUTER(m) {
    const direction = m.navi?.direction ?? "neutral";
    const value = m.impulse?.value ?? 0;
    const mult = m.impulse?.mult ?? 1;

    const xx = {
        roh: m.xx?.roh ?? "",
        signatur: m.xx?.signatur ?? "",
        länge: (m.xx?.signatur ?? "").length
    };

    const balance = BALANCE_88(m);

    const coreInput = { direction, value, mult };
    const coreResult = processImpulse(coreInput);

    return {
        pos: m.pos,
        meta: m.meta,
        xx,
        balance,
        input: coreInput,
        core: coreResult
    };
}

