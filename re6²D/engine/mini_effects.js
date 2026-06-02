/* mini_effects.js — ASCII / Emoti / Symbol */

(function(){

  function effectFor(text){
    const len = text.length;
    if(len < 120) return ">";
    if(len < 260) return ":)";
    return "𓂀";
  }

  function applyEffects(box){
    if(!box) return;
    const mark = effectFor(box.textContent || "");
    box.textContent += "\n\n" + mark;
  }

  window.applyEffects = applyEffects;

  const oldRender = window.render;
  window.render = function(){
    oldRender();
    const box = document.getElementById("storyBox");
    applyEffects(box);
  };

})();
