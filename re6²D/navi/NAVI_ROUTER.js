div.addEventListener("click", () => {
    const scan = SCANNER_XX(cell);
    const passage = PASSAGE_ENGINE(cell);
    const navi = NAVI_ROUTER(cell);

    document.getElementById("cell-info").textContent =
        `pos: ${cell.pos.x},${cell.pos.y}\n` +
        `roh: ${scan.roh}\n` +
        `signatur: ${scan.signatur}\n` +
        `länge: ${scan.länge}\n\n` +
        `passage: ${passage.join(" → ")}\n\n` +
        `navi: ui=${navi.ui}, ie=${navi.ie}, ah=${navi.ah}, ha=${navi.ha}, äh=${navi.äh}, hä=${navi.hä}`;
});
