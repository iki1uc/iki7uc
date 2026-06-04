export function renderTimeViewer(mask){
    const container = document.getElementById("timeViewer");
    container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "scroll-container";

    const zoomWrapper = document.createElement("div");
    zoomWrapper.id = "zoomWrapper";
    zoomWrapper.className = "zoom-wrapper";

    const grid = document.createElement("div");
    grid.id = "timeGrid";
    grid.className = "grid";

    zoomWrapper.appendChild(grid);
    wrapper.appendChild(zoomWrapper);
    container.appendChild(wrapper);

    // Grid füllen
    for(let r=1; r<=3; r++){
        for(let c=1; c<=11; c++){
            const cell = document.createElement("div");
            cell.className = "cell";

            const hit = mask.find(s => s.pos[0] === r && s.pos[1] === c);
            cell.textContent = hit ? hit.ref : "";

            grid.appendChild(cell);
        }
    }
}

