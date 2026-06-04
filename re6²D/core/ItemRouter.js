import { ITEM_ROUTER } from "./ItemRouter.js";

export const RoutingEngine = {

  routeItem(item, node, cluster){
    const routed = ITEM_ROUTER(item);

    const direction = routed.input.direction;
    const nextNodeId = this.resolveDirection(direction, node);

    if(!nextNodeId) {
      return {
        ...routed,
        routed_to: null,
        status: "blocked"
      };
    }

    const nextNode = cluster.find(n => n.station.id === nextNodeId);

    return {
      ...routed,
      routed_to: nextNodeId,
      status: "ok",
      nextNode
    };
  },

  resolveDirection(direction, node){
    const m = node.matrix_3x3;

    switch(direction){
      case "north": return m.north;
      case "south": return m.south;
      case "east":  return m.east;
      case "west":  return m.west;
      case "ne":    return m.ne;
      case "nw":    return m.nw;
      case "se":    return m.se;
      case "sw":    return m.sw;
      case "neutral":
      default:
        return null;
    }
  }
};
