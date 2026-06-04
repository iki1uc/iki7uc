import { NodeEngine } from "./NodeEngine.js";

export const ClusterEngine = {

  createCluster(rawNodes){
    const nodes = rawNodes.map(n => NodeEngine.init(n));
    return this.linkNodes(nodes);
  },

  linkNodes(nodes){
    const map = this.indexById(nodes);

    for(const node of nodes){
      const band = node.band_12plus1;

      node.matrix_3x3.north = map[band.up]  ? band.up  : null;
      node.matrix_3x3.south = map[band.down] ? band.down : null;

      // optional: east/west if du später erweiterst
    }

    return nodes;
  },

  indexById(nodes){
    const out = {};
    for(const n of nodes) out[n.station.id] = n;
    return out;
  }
};

