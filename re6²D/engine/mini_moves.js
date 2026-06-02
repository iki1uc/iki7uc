/* mini_moves.js — rewME / ME / forME */

(function(){

  function move(direction){
    if(!window.JA3.ready()) return; // nur wenn 3×JA erfüllt

    if(direction==="rewME") window.index--;
    if(direction==="ME")    window.index += 0;
    if(direction==="forME") window.index++;

    window.render();
  }

  window.MOVES = {
    rewME(){ move("rewME"); },
    ME(){ move("ME"); },
    forME(){ move("forME"); }
  };

})();

