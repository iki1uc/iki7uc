// me4.js — 4D Mapping

export function map_4d(state, fn) {
    const pfeiler = () => typeof fn === "function"
    const anker = () => ({
        value: fn(state.value),
        time: performance.now(),
        dim: "4D"
    })

    if (!pfeiler()) throw new Error("map_4d: fn fehlt")
    return anker()
}

