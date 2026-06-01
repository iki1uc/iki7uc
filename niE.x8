import { EVENTS } from "./events.js";

export const ERROR_MONITOR = {
    log: [],

    report(type, detail){
        const entry = {
            time: new Date().toISOString(),
            type,
            detail
        };

        this.log.push(entry);

        EVENTS.trigger("system_error", entry);
        console.warn("SYSTEM ERROR:", entry);
    }
};

window.addEventListener("error", e => {
    ERROR_MONITOR.report("JS_ERROR", e.message);
});

window.addEventListener("unhandledrejection", e => {
    ERROR_MONITOR.report("PROMISE_REJECTION", e.reason);
});
