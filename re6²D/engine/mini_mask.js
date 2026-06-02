/* mini_mask.js — PURE 3×3 Maske */

(function(){

  const MASKE = {
    welt:  ["𓂀 Neutral", "𓏏 Aktiv", "𓊹 Gefahr"],
    life:  ["🙂 stabil", "😐 neutral", "😮 überlast"],
    story: ["A Anfang", "M Mitte", "E Ende"]
  };

  const meta = document.getElementById("meta");

  function updateMask(slot){
    const w = MASKE.welt[ slot % 3 ];
    const l = MASKE.life[ slot % 3 ];
    const s = MASKE.story[ slot % 3 ];
    meta.textContent += ` | W:${w} | L:${l} | S:${s}`;
  }

  const oldRender = window.render;
  window.render = function(){
    oldRender();
    updateMask(window.index);
  };

})();

