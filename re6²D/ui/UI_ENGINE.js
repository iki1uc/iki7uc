/* UI ENGINE – verbindet DOM mit IMPULSE_ENGINE */

document.getElementById("runBtn").addEventListener("click", () => {
    const raw = document.getElementById("inputValue").value;

    const data = {
        value: Number(raw),
        direction: "forward",
        mult: 1
    };

    const result = processImpulse(data);
    updateLanes(result);
});

/* Lane Renderer */
function updateLanes(result){
    const lanes = document.querySelectorAll(".lane");
    lanes.forEach((lane, i) => {
        const L = result.lanes[i];
        lane.textContent = `${i} | ${L.code} | ×${L.factor} | ${L.result}`;
    });
}

