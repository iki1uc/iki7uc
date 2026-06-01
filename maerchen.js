import { ERROR_MONITOR } from "./error_monitor.js";

const suspicious = [
    "edge_all_open_tabs",
    "WebsiteContent_",
    "IsCurrent",
    "pageUrl",
    "pageTitle"
];

document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement.innerHTML;

    suspicious.forEach(word => {
        if(html.includes(word)){
            ERROR_MONITOR.report(
                "EDGE_INJECTION",
                "Edge hat Tab-Metadaten in die Datei geschrieben."
            );
        }
    });
});
