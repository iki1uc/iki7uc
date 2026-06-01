/*  
  cube_loader.js – 静かな読込器  
  -----------------------------------------
  日本の簡潔さ。  
  Une élégance discrète dans la structure.

  Aufgabe:
  – Projekte laden
  – Falls nicht vorhanden: sanft erzeugen
*/

window.SEEU_PROJECTS = window.SEEU_PROJECTS || {};

window.SEEU_LOAD_PROJECT = function(id){

  // Wenn Projekt fehlt → stille Erzeugung
  if(!window.SEEU_PROJECTS[id]){
    window.SEEU_PROJECTS[id] = {
      id,
      seed: "test-seed",        // ruhiger Standardwert
      chunksBase: "default",    // Basisstruktur
      version: "1.0"            // klare Versionslinie
    };
  }

  // Rückgabe – leise, zuverlässig
  return window.SEEU_PROJECTS[id];
};
