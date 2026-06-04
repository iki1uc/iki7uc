
export function render3x3(container, mask){
    const grid = document.createElement("div");
    grid.className = "grid3x3";

    for(let r=1; r<=3; r++){
        for(let c=1; c<=3; c++){
            const cell = document.createElement("div");
            cell.className = "cell";

            const hit = mask.find(s => s.pos[0] === r && s.pos[1] === c);
            cell.textContent = hit ? hit.ref : "";

            grid.appendChild(cell);
        }
    }

    container.appendChild(grid);
}
