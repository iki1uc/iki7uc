// GRID_VIEW.js
export function GRID_VIEW(grid) {
    return grid.map(row =>
        row.map(cell => `[${cell.pos.x},${cell.pos.y}]`).join(" ")
    ).join("\n");
}


