import GridLayer from "./GridLayer";
import PylonCellLayer from "./PylonCellLayer";

export default class PylonLayer extends GridLayer {
    constructor() {
        super();
    }

    getSubLayerClass() {
        return PylonCellLayer;
    }
}