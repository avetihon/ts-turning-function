import IPoint from '../interfaces/IPoint';
import IPolygon from '../interfaces/IPolygon';

const defaultCanvas: HTMLCanvasElement = document.querySelector('.js-canvas-polygon') as HTMLCanvasElement;
const defaultContext: CanvasRenderingContext2D = defaultCanvas.getContext('2d');

export const drawPolygon = (polygon: IPolygon): void => {
    let i: number;
    let len: number;
    let point: IPoint;
    let pointNext: IPoint;

    defaultContext.beginPath();
    defaultContext.moveTo(polygon[0][0],polygon[0][1]);

    for (i = 0, len = polygon.length - 1; i < len; i += 1) {
        point = polygon[i];
        pointNext = polygon[i + 1];
        defaultContext.lineTo(pointNext[0], pointNext[1]);
    }

    defaultContext.closePath();
    defaultContext.fillStyle = 'rgba(0, 0, 200, 0.5)';
    defaultContext.fill();
};

export const drawChart = (matrix: number[][], canvasClass: string): void => {
    const canvas: HTMLCanvasElement = document.querySelector(canvasClass) as HTMLCanvasElement;
    const context: CanvasRenderingContext2D = canvas.getContext('2d');
    const width = canvas.width;

    context.transform(1, 0, 0, -1, 0, canvas.height);
    context.beginPath();
    context.moveTo(0, matrix[0][0] * 10);

    let i: number;
    let len: number;
    for (i = 0, len = matrix.length - 1; i < len; i += 1) {
        context.lineTo(matrix[i][1] * width, matrix[i][0] * 10);
        context.lineTo(matrix[i][1] * width, matrix[i + 1][0] * 10);
    }

    context.lineTo(matrix[len][1] * width, matrix[len][0] * 10);
    context.stroke();
};

