import { EVENTS } from "./events.js";

EVENTS.on("system_error", err => {
    const box = document.getElementById("systemErrorBox");
    if(!box) return;

    box.innerHTML = `
        <div style="padding:10px;background:#330;color:#ff0;border:1px solid #660;">
            <b>⚠ SYSTEMFEHLER</b><br>
            <span>${err.type}</span><br>
            <small>${err.detail}</small>
        </div>
    `;
    box.style.display = "block";
});
