import TurningFunction from './TurningFunction';
import { squareOne, squareTwo, triangle, concavePolygon } from './Examples';
import drawSquare from './CanvasWrapper';

class Main {
    static main(): void {
        const turningFunction = new TurningFunction();
        let figure1 = turningFunction.createMatrix(squareOne);
        let figure2 = turningFunction.createMatrix(squareTwo);

        turningFunction.compare(figure1, figure2);

        drawSquare();
    }
}

Main.main();
