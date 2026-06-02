/* ENGINE_CONNECT.js — verbindet HTML und Mini-Module, ohne HTML zu ändern */

(function(){

  document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("nextBtn");
    if(!btn || typeof window.render !== "function") return;

    const oldRender = window.render;

    // render erweitern
    window.render = function(){
      oldRender();

      const meta = document.getElementById("meta");
      const box  = document.getElementById("storyBox");

      if(typeof window.updateMask === "function"){
        window.updateMask(window.index);
      }
      if(typeof window.applyEffects === "function"){
        window.applyEffects(box);
      }
      if(typeof window.applyTimer === "function"){
        window.applyTimer(meta, window.index);
      }

      const item = Array.isArray(window.sequence)
        ? window.sequence[window.index]
        : null;

      if(item && window.JA3 && typeof JA3.auto === "function"){
        JA3.auto(item.key); // rew / me / for
      }
    };

    // Button erweitern
    const oldClick = btn.onclick;
    btn.onclick = function(ev){
      // Moves optional
      if(window.MOVES && typeof MOVES.apply === "function"){
        const mod = window.index % 3;
        const dir = (mod === 0) ? -1 : (mod === 1 ? 0 : +1);
        MOVES.apply(dir);
        return; // MOVES ruft selbst render()
      }

      if(typeof oldClick === "function"){
        oldClick.call(btn, ev);
      }
    };

  });

})();
