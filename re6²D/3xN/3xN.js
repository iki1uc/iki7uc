export function processImpulse(data) {
    return {
        mode: data.direction,
        output: {
            value: data.value * data.mult
        }
    };
}

