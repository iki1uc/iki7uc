/*  
  cube_faces.js – 六面の静けさ  
  -----------------------------------------
  日本の簡潔さ。  
  Une élégance discrète dans chaque face.

  Aufgabe:
  – 6 Flächen erzeugen
  – klare Benennung
  – ruhige Darstellung
*/

window.SEEU_BUILD_FACES = function(projectId){

  // Reihenfolge der Flächen – 秩序と静寂
  const labels = ["front","back","right","left","top","bottom"];

  return labels.map(name=>{
    const d = document.createElement("div");

    // sanfte, klare Klassennamen
    d.className = "face face-" + name;

    // ruhige Beschriftung – minimal, aber elegant
    d.textContent = `${projectId} · ${name}`;

    return d;
  });
};
