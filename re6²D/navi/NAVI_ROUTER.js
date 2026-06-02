function createGrid(w, h) {
    const grid = [];
    for (let y = 0; y < h; y++) {
        const row = [];
        for (let x = 0; x < w; x++) {
            row.push({
                pos: { x, y },

                xx: {
                    roh: `${x}${y}`,
                    signatur: `XX-${x}${y}`
                },

                passage: {
                    in2: x + y,
                    me2: x - y,
                    in4: x * 2,
                    run4: y * 2,
                    me4: x * y,
                    u4: x + 1
                },

                navi: {
                    ui: `UI-${x}${y}`,
                    ie: `IE-${x}${y}`,
                    ah: `AH-${x}${y}`,
                    ha: `HA-${x}${y}`,
                    äh: `ÄH-${x}${y}`,
                    hä: `HÄ-${x}${y}`
                }
            });
        }
        grid.push(row);
    }
    return grid;
}
