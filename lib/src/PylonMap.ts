import DeckGL from "./DeckGL";
import PylonLayer from "./PylonLayer";

/**
 * This guy is the "glue" between a DeckGL instance 
 * and the modified map layers.
 */
export default class PylonMap {

    // just "rendering" strings for demo purposes
    render(): string[] {
        // Using PylonLayer here instead of Grid Layer with no compilation
        // errors from DeckGL since PylonLayer extends GridLayer
        const layer = new PylonLayer();
        const map = new DeckGL([layer]);

        return map.doSomethingWithCells();
    }
}