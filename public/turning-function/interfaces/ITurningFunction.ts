import IPolygon from './IPolygon';

interface ITurningFunction {
    compare(polygonA: IPolygon, polygonB: IPolygon): number;
}
