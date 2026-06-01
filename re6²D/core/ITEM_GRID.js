import { ITEM_MOLEKUEL } from "./ITEM_MOLEKUEL.js";

// 4×4 Fläche – jedes Feld = ein Molekül mit Ort
export const ITEM_GRID_4x4 = [
  [ { ...ITEM_MOLEKUEL, pos: { x: 0, y: 0 } },
    { ...ITEM_MOLEKUEL, pos: { x: 1, y: 0 } },
    { ...ITEM_MOLEKUEL, pos: { x: 2, y: 0 } },
    { ...ITEM_MOLEKUEL, pos: { x: 3, y: 0 } } ],

  [ { ...ITEM_MOLEKUEL, pos: { x: 0, y: 1 } },
    { ...ITEM_MOLEKUEL, pos: { x: 1, y: 1 } },
    { ...ITEM_MOLEKUEL, pos: { x: 2, y: 1 } },
    { ...ITEM_MOLEKUEL, pos: { x: 3, y: 1 } } ],

  [ { ...ITEM_MOLEKUEL, pos: { x: 0, y: 2 } },
    { ...ITEM_MOLEKUEL, pos: { x: 1, y: 2 } },
    { ...ITEM_MOLEKUEL, pos: { x: 2, y: 2 } },
    { ...ITEM_MOLEKUEL, pos: { x: 3, y: 2 } } ],

  [ { ...ITEM_MOLEKUEL, pos: { x: 0, y: 3 } },
    { ...ITEM_MOLEKUEL, pos: { x: 1, y: 3 } },
    { ...ITEM_MOLEKUEL, pos: { x: 2, y: 3 } },
    { ...ITEM_MOLEKUEL, pos: { x: 3, y: 3 } } ]
];

