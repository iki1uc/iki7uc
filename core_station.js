window.NAVI = window.NAVI || {
  onEvent(e){
    let danger = 1;
    let epoch = "jetzt";

    if(e.event.includes("war")) danger = 9;
    if(e.event.includes("future")) epoch = "future";
    if(e.event.includes("past")) epoch = "vergangen";

    document.getElementById("naviDanger").textContent = "Gefahr: "+danger;
    document.getElementById("naviEpoch").textContent = "Epoche: "+epoch;
    document.getElementById("naviStatus").textContent =
      danger>=7 ? "⚠ Gefahr" :
      danger<=1 ? "🌿 Wohlbefinden" :
      "… neutral";
  }
};
