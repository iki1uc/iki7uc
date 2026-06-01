// BALANCE_88.js
export function BALANCE_88(molekuel) {
    const diff = molekuel.acht88.links - molekuel.acht88.rechts;

    return {
        links: molekuel.acht88.links,
        rechts: molekuel.acht88.rechts,
        drift: diff,
        stabil: diff === 0
    };
}
