/*  
  clone_cubes_auto.js – 立方体の誕生  
  -----------------------------------------
  日本の静けさ。  
  Une élégance discrète dans la création.

  Aufgabe:
  – Projekt laden
  – Cube erzeugen
  – still, zuverlässig, ohne Lärm
*/

window.addEventListener("DOMContentLoaded", () => {

  // Projekt laden – 静かな準備
  const proj = window.SEEU_LOAD_PROJECT("test");

  // Cube erzeugen – 誕生の瞬間
  window.SEEU_CREATE_CUBE({
    projectId:   proj.id,
    seed:        proj.seed,
    containerId: "cubeWrap_test",
    chunksBase:  proj.chunksBase,
    version:     proj.version
  });

});
