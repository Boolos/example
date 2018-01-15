import test from "ava";
import GridLayer from "../src/GridLayer";
import DeckGL from "../src/DeckGL";
import PylonMap from "../src/PylonMap";



// Let's verify core components that we're dealing with
test("GridLayer provides a factory methed for cell subclasses", t => {
    const layer = new GridLayer();
    const cell = new (layer.getSubLayerClass())();

    t.is(cell.draw(), "The GridCellLayer is drawing this shiz");
});

test("DeckGL utilizes the whole class hierarchy to do stuff", t => {
    const layer0 = new GridLayer();
    const layer1 = new GridLayer();
    const map = new DeckGL([layer0, layer1]);

    t.deepEqual(map.doSomethingWithCells(), 
        ["The GridCellLayer is drawing this shiz",
         "The GridCellLayer is drawing this shiz"]);
});


// Let's verify how we're going to extend behavior of this class hierarchy

test("PylonMap can use all the components thus far", t => {
    const pylons = new PylonMap();

    t.deepEqual(pylons.render(), 
        ["The PylonCellLayer is on the case!"]);
});
