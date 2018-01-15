import GridLayer from "./GridLayer";

/**
 * I'm guessing DeckGL is one of the components that actually
 * uses the cells of each grid layer
 */
export default class DeckGL {
    constructor(private layers: GridLayer[]) { }

    doSomethingWithCells(): string[] {
        const cells = this.layers.map(l => new (l.getSubLayerClass())());
        return cells.map(c => c.draw());
    }
}