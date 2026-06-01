// revcalc.js
export function revcalc(state){
    return {
        axis: "3x1",
        direction: "backward",
        value: state.value,
        raw: state.raw ?? null,
        mult: state.mult ?? 1
    };
}

