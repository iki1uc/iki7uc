// rcalc.js
import { forcalc } from "./forcalc.js";
import { revcalc } from "./revcalc.js";

export function rcalc(event){
    // event.direction: "forward" | "backward"
    // event.state: { value, raw, mult, ... }

    const state = event.state ?? {};

    if(event.direction === "forward"){
        return {
            mode: "forward",
            result: forcalc(state)
        };
    }

    if(event.direction === "backward"){
        return {
            mode: "backward",
            result: revcalc(state)
        };
    }

    // neutral / unknown → nichts verzerren
    return {
        mode: "neutral",
        result: state
    };
}

