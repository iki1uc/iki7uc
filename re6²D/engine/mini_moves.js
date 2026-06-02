/* mini_moves.js — rewME / ME / forME */

(function(){

  function apply(dir){
    // dir: -1 = rew, 0 = me, +1 = for
    if(typeof window.index !== "number") return;

    if(dir === -1) window.index--;
    if(dir ===  0) window.index += 0;
    if(dir === +1) window.index++;

    if(typeof window.render === "function"){
      window.render();
    }
  }

  window.MOVES = {
    apply,
    rewME(){ apply(-1); },
    ME(){ apply(0); },
    forME(){ apply(+1); }
  };

})();
