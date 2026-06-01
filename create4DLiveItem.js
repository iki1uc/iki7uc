const AXIS = {x:0,y:0,z:0};

function updateEpochen(){
  document.getElementById("epX").textContent = AXIS.x;
  document.getElementById("epY").textContent = AXIS.y;
  document.getElementById("epZ").textContent = AXIS.z;
}

document.getElementById("scanZack").onclick = ()=>{
  AXIS.z++; updateEpochen(); halt("past");
};

document.getElementById("scanME").onclick = ()=>{
  AXIS.y++; updateEpochen(); halt("now");
};

document.getElementById("scanKlick").onclick = ()=>{
  AXIS.x++; updateEpochen(); halt("future");
};
