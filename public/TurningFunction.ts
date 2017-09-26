import IPoint from './IPoint';

class TurningFunction {

    public constructor() {}

    public createVector(point1: IPoint, point2: IPoint): IPoint {
        return [point2[0] - point1[0], point2[1] - point1[1]];
    }

    public getAngle(vectorA: IPoint, vectorB: IPoint): number {
        return Math.atan2(this.computeCrossProduct(vectorA, vectorB), this.computeDotProduct(vectorA, vectorB));
    }

    public computeCrossProduct(vectorA: IPoint, vectorB: IPoint): number {
        return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0];
    }

    public computeDotProduct(point1: IPoint, point2: IPoint): number {
        return point1[0] * point2[0] + point1[1] * point2[1];
    }

    public computeVectorLenght(vector: IPoint): number {
        return Math.sqrt(vector[0]**2 + vector[1]**2);
    }

    public createMatrix(pointList: IPoint[]) {
        let i: number;
        let len: number;
        let angle: number;
        let angleDeg: number;
        let angleRad: number;
        let matrix: number[];

        let vector1: IPoint;
        let vector2: IPoint;

        for (len = pointList.length - 1, i = len; i >= 0; i--) {
            if (i === 1) {

                vector1 = this.createVector(pointList[i], pointList[i - 1]);
                vector2 = this.createVector(pointList[i - 1], pointList[len]);
            } else if (i === 0) {
                vector1 = this.createVector(pointList[i], pointList[len]);
                vector2 = this.createVector(pointList[len], pointList[len - 1]);
            } else {
                vector1 = this.createVector(pointList[i], pointList[i - 1]);
                vector2 = this.createVector(pointList[i - 1], pointList[i - 2]);
            }
            // let a = this.computeDotProduct(vector1, vector2);
            // angleDeg = this.getAngle(vector1, vector2) * 180 / Math.PI;
            angleRad = this.getAngle(vector1, vector2);
            angleDeg = angleRad * 180 / Math.PI;
            // let computeDotTemp = this.computeDotProduct(vector1, vector2);
            // let multipleVektorsLenght = this.computeVectorLenght(vector1)*this.computeVectorLenght(vector2);
            // let cosAngle =  computeDotTemp / multipleVektorsLenght;
            // angleDeg = Math.acos(cosAngle) * 180 / Math.PI;
            // angleRad = Math.acos(cosAngle);
            // angle = Math.acos(this.computeDot(vector1, vector2)) * 180 / Math.PI;
            debugger;
        }
    }
}

export default TurningFunction;
