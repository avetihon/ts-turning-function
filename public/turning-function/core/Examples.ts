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

export const complexConcavePolygon: IPolygon = [
    [0, 49],
    [33, 7],
    [111, 0],
    [104, 72],
    [189, 63],
    [226, 128],
    [152, 102],
    [128, 136],
    [87, 151],
    [60, 122],
    [77, 79],
    [33, 79]
];

export const circlePolygon: IPolygon = [
    [12, 84],
    [45, 35],
    [108, 16],
    [224, 16],
    [276, 52],
    [295, 110],
    [253, 166],
    [158, 171],
    [62, 149]
];

export const smallCirclePolygon: IPolygon = [
    [71, 58],
    [133, 40],
    [222, 40],
    [266, 88],
    [232, 147],
    [143, 147],
    [77, 104]
];

export const rotatedSmallCirclePolygon: IPolygon = [
    [83.51, 33.97],
    [148.06, 32.63],
    [234.02, 55.67],
    [264.1, 113.42],
    [215.99, 161.61],
    [130.02, 138.58],
    [77.4, 79.96]
];
