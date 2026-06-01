import { EVENTS } from "./events.js";

EVENTS.on("maerchen_output", data => {
    const el = document.getElementById("story");
    if(!el) return;

    el.innerHTML = `
        <div>${data.text}</div>
        <br>
        <div class="small" style="opacity:.8">${data.folge}</div>
    `;
});

