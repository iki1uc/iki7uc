/* mini_timer.js — • / • • / • • • */

(function(){

  const meta = document.getElementById("meta");

  function timer(){
    const slot = window.index;

    if(slot % 3 === 0) return "•";
    if(slot % 3 === 1) return "• •";
    return "• • •";
  }

  const oldRender = window.render;
  window.render = function(){
    oldRender();
    meta.textContent += ` | T:${timer()}`;
  };

})();

