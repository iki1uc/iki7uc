function renderItems(items, container){
  container.innerHTML = '';
  items.forEach((it, idx)=>{
    const row = document.createElement('div');
    row.className = 'item';

    const mini = document.createElement('div');
    mini.className = 'mini-cube';

    // SHINE – japanische Ruhe + französische Eleganz
    const symbols = ['◻','◼','◇','◎'];
    mini.textContent = symbols[Math.floor(rand()*symbols.length)];

    // sanfter SHINE-Farbverlauf
    mini.style.background = `
      linear-gradient(
        135deg,
        rgba(${80+Math.floor(rand()*120)},${80+Math.floor(rand()*120)},${80+Math.floor(rand()*120)},0.18),
        rgba(255,255,255,0.05)
      )
    `;

    const txt = document.createElement('div');
    txt.textContent = it.text || `Fragment ${idx+1}`;

    row.appendChild(mini);
    row.appendChild(txt);
    container.appendChild(row);

    // gelegentlicher Impuls – SEEU bleibt aktiv
    if(rand() < 0.06) SEEU.applyImpulse?.((rand()-0.5)*0.06,(rand()-0.5)*0.05);
  });
}
