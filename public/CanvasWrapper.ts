const canvas: HTMLCanvasElement = document.querySelector('.js-canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d');

const drawSquare = () => {
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fillRect(30, 40, 50, 50);
};

export default drawSquare;
