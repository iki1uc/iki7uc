const NodeEngine = {

  init(node){
    return {
      ...node,
      sensorik: this.initSensorik(node.sensorik),
      matrix_3x3: this.initMatrix(node),
      safety: this.initSafety(node.safety),
      controls: this.resetControls(node.controls),
      generation: this.initGeneration(node.generation),
      meta: this.setReady(node.meta)
    };
  },

  initSensorik(s){
    return {
      ...s,
      scan_state: "idle",
      scan_result: null,
      history: []
    };
  },

  initMatrix(node){
    return {
      ...node.matrix_3x3,
      center: node.station.id,
      north: node.band_12plus1.up,
      south: node.band_12plus1.down
    };
  },

  initSafety(s){
    return {
      ...s,
      status: "ready"
    };
  },

  resetControls(c){
    const out = {};
    for(const key in c) out[key] = false;
    return out;
  },

  initGeneration(g){
    return {
      ...g,
      huhn: "idle",
      ei: "idle",
      omelett: "idle",
      satt: "idle"
    };
  },

  setReady(meta){
    return {
      ...meta,
      finalized: true
    };
  }
};

