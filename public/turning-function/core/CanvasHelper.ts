import IPoint from '../interfaces/IPoint';
import IPolygon from '../interfaces/IPolygon';


const canvas: HTMLCanvasElement = document.querySelector('.js-canvas') as HTMLCanvasElement;
const context: CanvasRenderingContext2D = canvas.getContext('2d');

export const drawSquare = (): void => {
    // context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // context.fillRect(30, 40, 50, 50);
};

export const drawPolygon = (polygon: IPolygon): void => {
    let i: number;
    let len: number;
    let point: IPoint;
    let pointNext: IPoint;

    context.beginPath();
    context.moveTo(polygon[0][0],polygon[0][1]);

    for (i = 0, len = polygon.length - 1; i < len; i += 1) {
        point = polygon[i];
        pointNext = polygon[i + 1];
        context.lineTo(pointNext[0], pointNext[1]);
    }

    context.closePath();
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fill();
};

