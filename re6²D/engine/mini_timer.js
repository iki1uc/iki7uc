/* mini_timer.js — • / • • / • • • */

(function(){

  function timerSymbol(slot){
    const t = slot % 3;
    if(t === 0) return "•";
    if(t === 1) return "• •";
    return "• • •";
  }

  function applyTimer(meta, slot){
    if(!meta) return;
    const t = timerSymbol(slot);
    meta.textContent += ` | T:${t}`;
  }

  window.applyTimer = applyTimer;

  const oldRender = window.render;
  window.render = function(){
    oldRender();
    const meta = document.getElementById("meta");
    const slot = typeof window.index === "number" ? window.index : 0;
    applyTimer(meta, slot);
  };

})();
1
