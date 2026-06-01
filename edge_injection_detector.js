// file4.js — Oberfläche / 4D

export function pfeiler_4(x) {
    return x !== undefined
}

export function anker_4(x) {
    return { value: x, time: performance.now(), dim: "4D" }
}

export function in_4d(x) {
    const pfeiler = () => x !== undefined
    const anker = () => ({ value: x, time: performance.now(), dim: "4D" })

    if (!pfeiler()) throw new Error("in_4d: kein Input")
    return anker()
}
export function run_4d(state, fn) {
    const pfeiler = () => typeof fn === "function"
    const anker = () => fn(state)

    if (!pfeiler()) throw new Error("run_4d: fn fehlt")
    return anker()
}
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
export function up_4d(state, level = 1) {
    const pfeiler = () => state && state.value !== undefined
    const anker = () => ({
        value: state.value + level,
        time: performance.now(),
        dim: "4D+"
    })

    if (!pfeiler()) throw new Error("up_4d: state ungültig")
    return anker()
}
