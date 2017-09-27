import TurningFunction from './core/TurningFunction';
import { squareOne, squareTwo, triangle, concavePolygon } from './core/Examples';
import { drawSquare, drawPolygon } from './core/CanvasHelper';

class Main {
    static main(): void {
        const turningFunction: TurningFunction = new TurningFunction();
        turningFunction.compare(squareOne, squareTwo);

        // drawSquare();
        drawPolygon(squareOne);
        // drawPolygon(concavePolygon);
    }
}

Main.main();
