/**
 * This is the dude we want to change functionality for without 
 * monkey-patching.  Specifically the `draw()` method
 */
export default class GridCellLayer {
    draw() {
        return "The GridCellLayer is drawing this shiz";
    }
}