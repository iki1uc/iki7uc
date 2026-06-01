import { ITEM_GRID_4x4 } from "./ITEM_GRID.js";
import { NAVI_ROUTER } from "../navi/NAVI_ROUTER.js";
import { PASSAGE_ENGINE } from "../passage/PASSAGE_ENGINE.js";
import { SCANNER_XX } from "../scanner/SCANNER_XX.js";
import { BALANCE_88 } from "../balance/BALANCE_88.js";

export function TESTLAUF() {
    const ergebnis = [];

    for (const row of ITEM_GRID_4x4) {
        for (const cell of row) {

            const navi = NAVI_ROUTER(cell);
            const passage = PASSAGE_ENGINE(cell);
            const scan = SCANNER_XX(cell);
            const balance = BALANCE_88(cell);

            ergebnis.push({
                pos: cell.pos,
                navi,
                passage,
                scan,
                balance
            });
        }
    }

    return ergebnis;
}

