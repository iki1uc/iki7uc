/* mini_3ja.js — 3×3 JA-Mechanik */

(function(){

  const JA = { rew:false, me:false, for:false };

  function ready(){
    return JA.rew && JA.me && JA.for;
  }

  window.JA3 = {
    set(axis){
      if(axis==="rew") JA.rew = true;
      if(axis==="me")  JA.me  = true;
      if(axis==="for") JA.for = true;
    },
    ready,
    debug(){
      return { ...JA, ready:ready() };
    }
  };

})();

