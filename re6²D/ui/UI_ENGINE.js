import { render3x3 } from "./time/render_3x3.js";
import { render3x4 } from "./time/render_3x4.js";
import { render3x7 } from "./time/render_3x7.js";
import { renderScroll } from "./time/render_scroll.js";
import { renderScrollZoom } from "./time/render_scroll_zoom.js";

let lastResult = null;

function updateTimeViewer(result){
    lastResult = result;

    const mask = result.timeSlots.map(s => ({
        pos: s.pos,
        ref: s.ref || "?",
        phase: s.phase || null
    }));

    const container = document.getElementById("timeViewer");
    container.innerHTML = "";

    switch(timeMode){
        case "3x3":
            render3x3(container, mask);
            break;

        case "3x4":
            render3x4(container, mask);
            break;

        case "3x7":
            render3x7(container, mask);
            break;

        case "scroll":
            renderScroll(container, mask);
            break;

        case "zoom":
            renderScrollZoom(container, mask);
            break;
    }
}
