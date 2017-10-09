import IPoint from '../interfaces/IPoint';
import IPolygon from '../interfaces/IPolygon';
import {drawChart, drawPolygon} from './CanvasHelper';

const CANVAS_MATRIX_A = '.js-canvas-matrix-a';
const CANVAS_MATRIX_B = '.js-canvas-matrix-b';

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

    private createMatrix(polygon: IPolygon, perimeter: number, index: number = polygon.length - 1): number[][] {
        if (index > polygon.length - 1) {
            index = polygon.length - 1
        }

        let angle: number = 0; // angle in radian
        let vectorLength: number = 0;
        let matrix: number[][] = [];

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

    private computeSum(matrixA: number[][], matrixB: number[][]): number {
        let indexA: number = 0;
        let indexB: number = 0;

        let lastPoint = 0;

        let i: number;
        let len: number;
        let theta: number; // the height of the rectangular strip
        let ds: number; // the width of the rectangular strip
        let area: number;
        let sum: number = 0;

        // count all stripes
        for (i = 0, len = matrixA.length + matrixB.length - 1; i < len; i += 1) {
            // compute height of current strip.
            theta = matrixA[indexA][0] - matrixB[indexB][0];

            if (matrixA[indexA][1] <= matrixB[indexB][1]) {
                // compute width of current stripe
                ds = matrixA[indexA][1] - lastPoint;
                area = ds * theta;
                sum += Math.pow(area, 2);

                lastPoint = matrixA[indexA][1];
                indexA++;
            } else {
                // compute width of current stripe
                ds = matrixB[indexB][1] - lastPoint;
                area = ds * theta;
                sum += Math.pow(area, 2);

                lastPoint = matrixB[indexB][1];
                indexB++;
            }
        }

        return Math.sqrt(sum);
    }

    public compare(polygonA: IPolygon, polygonB: IPolygon): number {

        const perimeterPolygonA: number = this.computePerimeter(polygonA);
        const perimeterPolygonB: number = this.computePerimeter(polygonB);

        let sum: number;
        let minimumSum: number = Number.MAX_SAFE_INTEGER;

        let matrixA: number[][] = this.createMatrix(polygonA, perimeterPolygonA);
        let matrixB: number[][];

        let i: number;
        for (i = polygonB.length - 1; i >= 0; i -= 1) {
            matrixB = this.createMatrix(polygonB, perimeterPolygonB, i);
            sum = this.computeSum(matrixA, matrixB);

            if (minimumSum > sum) {
                minimumSum = sum;
            }
        }

        drawChart(matrixA, CANVAS_MATRIX_A);
        drawChart(matrixB, CANVAS_MATRIX_B);

        drawPolygon(polygonA);
        drawPolygon(polygonB);

        return minimumSum;
    }
}

export default TurningFunction;
