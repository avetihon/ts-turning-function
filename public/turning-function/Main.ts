import TurningFunction from './core/TurningFunction';
import { squareOne, squareTwo, triangle, concavePolygon } from './core/Examples';
import { drawSquare, drawPolygon } from './core/CanvasHelper';

class Main {
    static main(): void {
        const turningFunction: TurningFunction = new TurningFunction();
        let figure1 = turningFunction.createMatrix(squareOne);
        let figure2 = turningFunction.createMatrix(squareTwo);

        turningFunction.compare(figure1, figure2);

        // drawSquare();
        drawPolygon(squareOne);
        // drawPolygon(concavePolygon);
    }
}

Main.main();
