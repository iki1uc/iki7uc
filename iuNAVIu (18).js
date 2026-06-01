/*  
  SHIFT – Sinn & Seele Layer  
  -----------------------------------------
  日本の静けさ。  
  Une touche française pour la clarté.
*/

function shiftSinn(data) {
  return {
    essenz: data.out,
    richtung: data.schiene.next,
    zeit: data.eich.uhrzeit,
    datum: data.eich.datum,
    kern: `${data.cube} / ${data.role}`
  };
}

// Seele – berührt nichts Sichtbares
function SHIFT_SEELE(frame) {
  return {
    moment: frame.eich.iso,
    richtung: frame.schiene.next,
    bedeutung: frame.out,
    zustand: frame.state
  };
}

function shiftCore(input) {
  const schiene = shiftGetSchiene();
  const eich = EICH();

  const frame = {
    cube: CUBE_ID,
    role: ROLE,
    in: input,
    state: STATE,
    schiene,
    eich,
    out: `SHIFT(${input})`
  };

  // Sinn + Seele aktivieren
  frame.sinn = shiftSinn(frame);
  frame.seele = SHIFT_SEELE(frame);

  return frame;
}
