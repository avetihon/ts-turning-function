import IPoint from '../interfaces/IPoint';
import IPolygon from '../interfaces/IPolygon';

class TurningFunction {

    public constructor() {}

    private createVector(point1: IPoint, point2: IPoint): IPoint {
        return [point2[0] - point1[0], point2[1] - point1[1]];
    }

    private getAngle(vectorA: IPoint, vectorB: IPoint): number {
        return Math.atan2(this.computeCrossProduct(vectorA, vectorB), this.computeDotProduct(vectorA, vectorB));
    }

    private computeCrossProduct(vectorA: IPoint, vectorB: IPoint): number {
        return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0];
    }

    private computeDotProduct(vectorA: IPoint, vectorB: IPoint): number {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
    }

    private computeVectorLenght(vector: IPoint): number {
        return Math.sqrt(vector[0] ** 2 + vector[1] ** 2);
    }

    private computePerimeter(polygon: IPolygon): number {
        let i: number;
        let len: number;
        let vector: IPoint;
        let perimeter: number = 0;
        for (i = 0, len = polygon.length; i < len; i += 1) {
            if (i === len - 1) {
                vector = this.createVector(polygon[i], polygon[0]);
            } else {
                vector = this.createVector(polygon[i], polygon[i + 1]);
            }

            perimeter += this.computeVectorLenght(vector);
        }

        return perimeter;
    }

    private createMatrix(polygon: IPolygon, perimeter: number, index: number = polygon.length - 1): any {
        let angle: number = 0; // angle in radian
        let vectorLength: number = 0;
        let matrix: number[][] = [[0, 0]];

        let vectorA: IPoint;
        let vectorB: IPoint;

        let i: number;
        let len: number = polygon.length - 1;
        let previousIndex: number = index - 1 < 0 ? len : index - 1;
        for (i = 0; i <= len; i += 1) {
            vectorA = this.createVector(polygon[index], polygon[previousIndex]);

            index -= 1;
            previousIndex -= 1;

            if (previousIndex < 0) {
                previousIndex = len;
            } else if (index < 0) {
                index = len;
            }

            vectorB = this.createVector(polygon[index], polygon[previousIndex]);

            angle += (-1 * this.getAngle(vectorA, vectorB));
            vectorLength += (this.computeVectorLenght(vectorA) / perimeter); // normalize to 1
            matrix.push([angle, vectorLength]);
        }

        return matrix;
    }

    public compare(polygonA: IPolygon, polygonB: IPolygon): number {

        const perimeterPolygonA: number = this.computePerimeter(polygonA);
        const perimeterPolygonB: number = this.computePerimeter(polygonB);

        const matrixA = this.createMatrix(polygonA, perimeterPolygonA);
        // const matrixB = this.createMatrix(polygonB);

        let i: number;
        let len: number;
        for (len = polygonA.length - 1, i = len; i >= 0; i--) {

        }

        return null;
    }
}

export default TurningFunction;
