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

    private createMatrix(polygon: IPolygon): any {
        let i: number;
        let len: number;
        let angle: number = 0; // angle in radian
        let vectorLength: number = 0;
        let matrix: number[][] = [];

        let vectorA: IPoint;
        let vectorB: IPoint;

        let perimeter = this.computePerimeter(polygon);

        for (len = polygon.length - 1, i = len; i >= 0; i--) {
            if (i === 1) {
                vectorA = this.createVector(polygon[i], polygon[i - 1]);
                vectorB = this.createVector(polygon[i - 1], polygon[len]);
            } else if (i === 0) {
                vectorA = this.createVector(polygon[i], polygon[len]);
                vectorB = this.createVector(polygon[len], polygon[len - 1]);
            } else {
                vectorA = this.createVector(polygon[i], polygon[i - 1]);
                vectorB = this.createVector(polygon[i - 1], polygon[i - 2]);
            }
            // let a = this.computeDotProduct(vectorA, vectorB);
            // angleDeg = this.getAngle(vectorA, vectorB) * 180 / Math.PI;
            angle += (-1 * this.getAngle(vectorA, vectorB));
            vectorLength += (this.computeVectorLenght(vectorA) / perimeter); // normalize to 1
            matrix.push([angle, vectorLength]);
            // debugger;
            //
            // matrixAngle[i] = angle;
            // matrixLength[i] = this.computeVectorLenght(vectorA);
            // let computeDotTemp = this.computeDotProduct(vectorA, vectorB);
            // let multipleVektorsLenght = this.computeVectorLenght(vectorA)*this.computeVectorLenght(vectorB);
            // let cosAngle =  computeDotTemp / multipleVektorsLenght;
            // angleDeg = Math.acos(cosAngle) * 180 / Math.PI;
            // angleRad = Math.acos(cosAngle);
            // angle = Math.acos(this.computeDot(vectorA, vectorB)) * 180 / Math.PI;

            //debugger;
        }

        return matrix;
    }

    public compare(polygonA: IPolygon, polygonB: IPolygon): number {

        if (polygonA.length !== polygonB.length)
            return null;

        const matrixA = this.createMatrix(polygonA);
        const matrixB = this.createMatrix(polygonB);

        let i: number;
        let len: number;
        for (len = matrixA.length - 1, i = len; i >= 0; i--) {

        }

        return null;
    }
}

export default TurningFunction;
