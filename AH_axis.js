// uiNAVIu.js — zentraler NAVI Core
window.NAVI = window.NAVI || (function(){
  const alias = window.NAVI_ALIAS || "navi_root";
  const entry = window.NAVI_ENTRY || "ui";

  function safeText(id, text){
    const el = document.getElementById(id);
    if(el) el.textContent = text;
  }

  function getEpoch(e){
    if(!e) return "unbekannt";
    if(e.anchor === "PI") return "jetzt";
    if(e.anchor === "Q2") return "future";
    if(e.anchor === "Q0") return "vergangen";
    return "unbekannt";
  }

  function getDanger(e){
    if(!e) return 1;
    if(e.type === "cube_interaction") return 2;
    if(e.type === "war") return 9;
    if(e.type === "heart") return 0;
    // falls movement vorhanden, kann hier später gewichtet werden
    return 1;
  }

  function updateHUD(epoch, danger, e){
    safeText("naviEpoch", "Epoche: " + epoch);
    safeText("naviDanger", "Gefahr: " + danger);
    safeText("naviStatus",
      danger >= 7 ? "⚠ Gefahr" :
      danger <= 1 ? "🌿 Wohlbefinden" :
      "… neutral"
    );

    // optional: resume / instance / entry anzeigen, falls vorhanden
    if(e && e.resume) safeText("maskResume", e.resume);
    safeText("maskInstanz", alias);
    safeText("maskEntry", entry);
  }

  return {
    alias,
    entry,

    onEvent(e){
      // enrich event with alias/entry and timestamp
      e = e || {};
      e.instance = e.instance || alias;
      e._naviEntry = entry;
      e._naviReceivedAt = Date.now();

      // console log mit klarer Prefixstruktur
      console.log(`[NAVI:${alias}:${entry}] Ereignis empfangen:`, e);

      // 1) Epoche bestimmen
      const epoch = getEpoch(e);

      // 2) Gefahr/Wohlbefinden bestimmen
      const danger = getDanger(e);

      // 3) HUD aktualisieren
      updateHUD(epoch, danger, e);

      // 4) Weiterverarbeitung: Kompass / Chain / Cluster Hooks
      // Platzhalter: hier können später Kompass- und Cluster-Module aufgerufen werden
      if(typeof window.NAVI_onEventHook === "function"){
        try { window.NAVI_onEventHook(e); }
        catch(err){ console.warn("[NAVI] onEventHook Fehler:", err); }
      }
    },

    // Exponierte Hilfsfunktionen für Tests und Debugging
    getEpoch,
    getDanger,
    updateHUD
  };
})();
