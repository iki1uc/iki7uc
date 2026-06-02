<script>
// ===============================
// 1) IMPULSE ENGINE
// ===============================

const MULT = {
    "F2": 2,
    "R1": -1,
    "M4": 4,
    "M8": 8,
    "M16": 16,
    "M128": 128
};

const LANES = [
    "F2","R1","M4","M8",
    "M16","M128","F2","R1",
    "M4","M8","M16","M128",
    "F2","R1","M4","M8"
];

function processImpulse(data){
    const { value, direction, mult } = data;
    const dir = direction === "reverse" ? -1 : 1;
    let base = value * dir * mult;

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

// ===============================
// 2) GRID VIEW (INLINE VERSION)
// ===============================

function GRID_VIEW(grid) {
    return grid
        .map(row =>
            row
                .map(cell => `[${cell.pos.x},${cell.pos.y}]`)
                .join(" ")
        )
        .join("\n");
}

// ===============================
// 3) UI-MASKE
// ===============================

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

// ===============================
// 4) LANE-RENDERER
// ===============================

function updateLanes(result){
    const lanes = document.querySelectorAll(".lane");
    lanes.forEach((lane, i) => {
        const L = result.lanes[i];
        lane.textContent = `${i} | ${L.code} | ×${L.factor} | ${L.result}`;
    });
}
</script>
