/* mini_effects.js — ASCII / Emoti / Symbol */

(function(){

  const box = document.getElementById("storyBox");

  function effect(){
    const text = box.textContent;
    const len  = text.length;

    if(len < 120) return ">";     // ASCII
    if(len < 260) return ":)";    // Emoti
    return "𓂀";                  // Symbol
  }

  const oldRender = window.render;
  window.render = function(){
    oldRender();
    box.textContent += "\n\n" + effect();
  };

})();

