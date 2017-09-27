/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./public/turning-function/core/TurningFunction.ts
class TurningFunction {
    constructor() { }
    createVector(point1, point2) {
        return [point2[0] - point1[0], point2[1] - point1[1]];
    }
    getAngle(vectorA, vectorB) {
        return Math.atan2(this.computeCrossProduct(vectorA, vectorB), this.computeDotProduct(vectorA, vectorB));
    }
    computeCrossProduct(vectorA, vectorB) {
        return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0];
    }
    computeDotProduct(vectorA, vectorB) {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
    }
    computeVectorLenght(vector) {
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    }
    computePerimeter(polygon) {
        let i;
        let len;
        let vector;
        let perimeter = 0;
        for (i = 0, len = polygon.length; i < len; i += 1) {
            if (i === len - 1) {
                vector = this.createVector(polygon[i], polygon[0]);
            }
            else {
                vector = this.createVector(polygon[i], polygon[i + 1]);
            }
            perimeter += this.computeVectorLenght(vector);
        }
        return perimeter;
    }
    createMatrix(polygon) {
        let i;
        let len;
        let angle = 0; // angle in radian
        let vectorLength = 0;
        let matrix = [];
        let vectorA;
        let vectorB;
        let perimeter = this.computePerimeter(polygon);
        for (len = polygon.length - 1, i = len; i >= 0; i--) {
            if (i === 1) {
                vectorA = this.createVector(polygon[i], polygon[i - 1]);
                vectorB = this.createVector(polygon[i - 1], polygon[len]);
            }
            else if (i === 0) {
                vectorA = this.createVector(polygon[i], polygon[len]);
                vectorB = this.createVector(polygon[len], polygon[len - 1]);
            }
            else {
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
    compare(polygonA, polygonB) {
        if (polygonA.length !== polygonB.length)
            return null;
        const matrixA = this.createMatrix(polygonA);
        const matrixB = this.createMatrix(polygonB);
        let i;
        let len;
        for (len = matrixA.length - 1, i = len; i >= 0; i--) {
        }
        return null;
    }
}
/* harmony default export */ var core_TurningFunction = (TurningFunction);

// CONCATENATED MODULE: ./public/turning-function/core/Examples.ts
const squareOne = [
    [20, 20],
    [40, 20],
    [40, 50],
    [20, 50]
];
const squareTwo = [
    [25, 25],
    [45, 25],
    [45, 55],
    [25, 55]
];
const triangle = [
    [10, 10],
    [30, 30],
    [10, 30]
];
const concavePolygon = [
    [10, 10],
    [20, 20],
    [30, 10],
    [30, 50],
    [10, 50]
];

// CONCATENATED MODULE: ./public/turning-function/core/CanvasHelper.ts
const canvas = document.querySelector('.js-canvas-polygon');
const context = canvas.getContext('2d');
const drawSquare = () => {
    // context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    // context.fillRect(30, 40, 50, 50);
};
const drawPolygon = (polygon) => {
    let i;
    let len;
    let point;
    let pointNext;
    context.beginPath();
    context.moveTo(polygon[0][0], polygon[0][1]);
    for (i = 0, len = polygon.length - 1; i < len; i += 1) {
        point = polygon[i];
        pointNext = polygon[i + 1];
        context.lineTo(pointNext[0], pointNext[1]);
    }
    context.closePath();
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fill();
};

// CONCATENATED MODULE: ./public/turning-function/Main.ts



class Main_Main {
    static main() {
        const turningFunction = new core_TurningFunction();
        turningFunction.compare(squareOne, squareTwo);
        // drawSquare();
        drawPolygon(squareOne);
        // drawPolygon(concavePolygon);
    }
}
Main_Main.main();


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map