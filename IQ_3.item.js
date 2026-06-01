window.SEEU = window.SEEU || {};
window.SEEU_PROJECTS = window.SEEU_PROJECTS || {};
window.SEEU_CLONES = window.SEEU_CLONES || {};

window.SEEU_CREATE_CUBE = function(opts){
  const { projectId, seed, containerId, chunksBase, version } = opts;

  const container = document.getElementById(containerId);
  if(!container){
    console.error("Container fehlt:", containerId);
    return null;
  }

  const cube = document.createElement("div");
  cube.className = "cube";
  cube.style.transform = "rotateX(0deg) rotateY(0deg)";

  const faces = window.SEEU_BUILD_FACES(projectId);
  faces.forEach(f => cube.appendChild(f));

  container.innerHTML = "";
  container.appendChild(cube);

  const inst = {
    id: projectId,
    seed,
    container,
    cube,
    rotX: 0,
    rotY: 0,
    applyImpulse(ix, iy){
      this.rotX += iy * 40;
      this.rotY += ix * 40;
      cube.style.transform = `rotateX(${this.rotX}deg) rotateY(${this.rotY}deg)`;
    }
  };

  window.SEEU.applyImpulse = (x,y)=> inst.applyImpulse(x,y);
  console.log("Cube erzeugt:", projectId);
  return inst;
};
