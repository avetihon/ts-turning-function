import TurningFunction from './core/TurningFunction';
import {
    squareOne, squareTwo, triangle, concavePolygon, complexConcavePolygon, circlePolygon,
    smallCirclePolygon, rotatedSmallCirclePolygon
} from './core/Examples';

class Main {
    static main(): void {
        const turningFunction: TurningFunction = new TurningFunction();
        console.time('test');
        const distance: number = turningFunction.compare(circlePolygon, rotatedSmallCirclePolygon);
        console.timeEnd('test');
        console.log('DISTANCE', distance);
    }
}

Main.main();
