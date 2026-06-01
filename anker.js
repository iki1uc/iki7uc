/*  
  cube_sim.js – 呼吸する立方体  
  -----------------------------------------
  日本の静けさ。  
  Une élégance discrète dans le mouvement.
  
  StorySlope → sanfte Impulse  
  SEEU → mechanische Klarheit  
  この立方体は「物語の風」を受けて回る。
*/

(function(){

  // --- Konfiguration – 優しい調整 ---
  const SLOPE_MAX_IMPULSE = 0.22;   // maximale Impulsstärke
  const SLOPE_NOISE = 0.03;        // leichtes Rauschen – souffle léger
  const SLOPE_SMOOTH = 0.12;       // Glättung (EMA)
  const SLOPE_DEADZONE = 0.02;     // Ruhezone – zone de silence
  const SLOPE_TO_ANGLE_RATIO = 1.0;

  // --- Interner Zustand – 内なる流れ ---
  let storySlopeRaw = 0;    
  let storySlopeSmooth = 0;

  // --- Externe API – 物語の傾き ---
  window.SEEU = window.SEEU || {};
  window.SEEU.setStorySlope = function(v){
    if(typeof v !== 'number' || isNaN(v)) return;
    if(v > 1) v = 1; if(v < -1) v = -1;
    storySlopeRaw = v;
    broadcast({type:'slope', slope:v, ts:Date.now()});
  };

  // --- Remote‑Slope – 遠くの風を受け取る ---
  function applyRemoteSlope(v){
    if(typeof v !== 'number') return;
    storySlopeRaw = v;
  }

  window.addEventListener('storage', e=>{
    if(e.key === 'seeu_presence' && e.newValue){
      try{
        const p = JSON.parse(e.newValue);
        if(p?.type === 'slope') applyRemoteSlope(p.slope);
      }catch(e){}
    }
  });

  // --- Mapping – 傾き → 呼吸の衝動 ---
  function slopeToImpulse(){
    storySlopeSmooth =
      storySlopeSmooth * (1 - SLOPE_SMOOTH) +
      storySlopeRaw * SLOPE_SMOOTH;

    if(Math.abs(storySlopeSmooth) < SLOPE_DEADZONE) return null;

    const base = storySlopeSmooth * SLOPE_MAX_IMPULSE * SLOPE_TO_ANGLE_RATIO;
    const noise = (rand()*2 - 1) * SLOPE_NOISE;

    const ix = base + noise;
    const iy = base * 0.35 + noise * 0.5;

    const max = SLOPE_MAX_IMPULSE;
    return {
      ix: Math.max(-max, Math.min(max, ix)),
      iy: Math.max(-max, Math.min(max, iy))
    };
  }

  // --- Routine – 呼吸のリズム ---
  setInterval(()=>{
    const imp = slopeToImpulse();
    if(imp){
      const strength = Math.hypot(imp.ix, imp.iy);
      if(strength > SLOPE_MAX_IMPULSE * 0.6){
        if(window.SEEU?.setCubeState) window.SEEU.setCubeState('busy');
        else if(typeof setCubeStateLocal === 'function') setCubeStateLocal('busy');
      }
      if(window.SEEU?.applyImpulse) window.SEEU.applyImpulse(imp.ix, imp.iy);
      else if(typeof applyImpulse === 'function') applyImpulse(imp.ix, imp.iy);
    }
  }, 300);

  // --- Fallback – 風が止まった時のために ---
  let lastSlopeSeenTs = Date.now();

  setInterval(()=>{
    if(Math.abs(storySlopeRaw) > 0.0001) lastSlopeSeenTs = Date.now();

    if(Date.now() - lastSlopeSeenTs > 6000){
      const r1 = (rand()*2 - 1) * (SLOPE_MAX_IMPULSE * 0.12);
      const r2 = (rand()*2 - 1) * (SLOPE_MAX_IMPULSE * 0.08);

      if(window.SEEU?.applyImpulse) window.SEEU.applyImpulse(r1, r2);
      if(window.SEEU?.lemmingOnce) window.SEEU.lemmingOnce();

      if(window.SEEU?.setCubeState) window.SEEU.setCubeState('busy');

      lastSlopeSeenTs = Date.now();
    }
  }, 2000);

  // --- BroadcastChannel – 静かな通信 ---
  try{
    const bc = new BroadcastChannel('seeu-presence');
    bc.onmessage = e => {
      const d = e.data;
      if(d?.type === 'slope') applyRemoteSlope(d.slope);
    };
  }catch(e){}

  // --- Debug – 観察のために ---
  window.SEEU.getStorySlope = ()=> ({
    raw: storySlopeRaw,
    smooth: storySlopeSmooth
  });

})();
