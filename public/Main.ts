import TurningFunction from './TurningFunction';
import { squareOne, squareTwo, triangle, concavePolygon } from './Examples';
import drawSquare from './CanvasWrapper';

class Main {
    static main(): void {
        const turningFunction = new TurningFunction();
        turningFunction.createMatrix(concavePolygon);

        drawSquare();
    }
}

Main.main();
