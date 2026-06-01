// seeu_item_molecule.js – all4all v1

export function createSEEUItem(projectId, containerId){

  // 1) Projekt laden
  const project = window.SEEU_LOAD_PROJECT(projectId);

  // 2) Cube erzeugen
  const cubeInst = window.SEEU_CREATE_CUBE({
    projectId,
    seed: project.seed,
    containerId,
    chunksBase: project.chunksBase,
    version: project.version
  });

  // 3) Bewegungsdaten aus cube_sim.js
  const slope = window.SEEU.getStorySlope
    ? window.SEEU.getStorySlope()
    : { raw:0, smooth:0 };

  // 4) all4all – vollständiges Item
  return {
    id: projectId,

    // Projekt
    project,

    // UI
    cube: cubeInst.cube,
    rotX: cubeInst.rotX,
    rotY: cubeInst.rotY,
    applyImpulse: cubeInst.applyImpulse,

    // Bewegung
    slope_raw: slope.raw,
    slope_smooth: slope.smooth,

    // Snapshot – all4all
    snapshot(){
      return {
        id: this.id,
        project: this.project,
        rotX: this.rotX,
        rotY: this.rotY,
        slope_raw: this.slope_raw,
        slope_smooth: this.slope_smooth
      };
    }
  };
}

