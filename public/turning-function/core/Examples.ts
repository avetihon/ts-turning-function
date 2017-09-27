import IPolygon from '../interfaces/IPolygon';

export const squareOne: IPolygon = [
    [20, 20],
    [40, 20],
    [40, 50],
    [20, 50]
];

export const squareTwo: IPolygon = [
    [25, 25],
    [45, 25],
    [45, 55],
    [25, 55]
];

export const triangle: IPolygon = [
    [10, 10],
    [30, 30],
    [10, 30]
];

export const concavePolygon: IPolygon = [
    [10, 10],
    [20, 20],
    [30, 10],
    [30, 50],
    [10, 50]
];
