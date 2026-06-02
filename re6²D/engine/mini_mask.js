/* mini_mask.js — PURE 3×3 Maske */

(function(){

  const MASKE = {
    welt:  ["𓂀 Neutral", "𓏏 Aktiv", "𓊹 Gefahr"],
    life:  ["🙂 stabil", "😐 neutral", "😮 überlast"],
    story: ["A Anfang", "M Mitte", "E Ende"]
  };

  // interne Funktion
  function _updateMask(slot){
    const w = MASKE.welt[ slot % 3 ];
    const l = MASKE.life[ slot % 3 ];
    const s = MASKE.story[ slot % 3 ];

    const meta = document.getElementById("meta");
    meta.textContent += ` | W:${w} | L:${l} | S:${s}`;
  }

  // externe Hook-Funktion
  window.updateMask = function(slot){
    _updateMask(slot);
  };

  // render erweitern
  const oldRender = window.render;
  window.render = function(){
    oldRender();
    _updateMask(window.index);
  };

})();
