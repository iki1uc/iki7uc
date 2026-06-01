export function forcalc(state){
    return {
        axis: "3x2",
        direction: "forward",
        value: state.value,
        raw: state.raw ?? null,
        mult: state.mult ?? 1
    };
}

