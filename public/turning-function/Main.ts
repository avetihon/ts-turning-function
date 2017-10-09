import TurningFunction from './core/TurningFunction';
import {
    squareOne, squareTwo, triangle, concavePolygon, complexConcavePolygon, circlePolygon,
    smallCirclePolygon
} from './core/Examples';

class Main {
    static main(): void {
        const turningFunction: TurningFunction = new TurningFunction();
        const distance: number = turningFunction.compare(circlePolygon, complexConcavePolygon);

        console.log('DISTANCE', distance);
    }
}

Main.main();
