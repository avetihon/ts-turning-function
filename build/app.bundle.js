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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TurningFunction__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Examples__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CanvasWrapper__ = __webpack_require__(3);



class Main {
    static main() {
        const turningFunction = new __WEBPACK_IMPORTED_MODULE_0__TurningFunction__["a" /* default */]();
        let figure1 = turningFunction.createMatrix(__WEBPACK_IMPORTED_MODULE_1__Examples__["a" /* squareOne */]);
        let figure2 = turningFunction.createMatrix(__WEBPACK_IMPORTED_MODULE_1__Examples__["b" /* squareTwo */]);
        turningFunction.compare(figure1, figure2);
        Object(__WEBPACK_IMPORTED_MODULE_2__CanvasWrapper__["a" /* default */])();
    }
}
Main.main();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    computeDotProduct(point1, point2) {
        return point1[0] * point2[0] + point1[1] * point2[1];
    }
    computeVectorLenght(vector) {
        return Math.sqrt(Math.pow(vector[0], 2) + Math.pow(vector[1], 2));
    }
    createMatrix(pointList) {
        let i;
        let len;
        let angle;
        let angleDeg;
        let angleRad;
        let matrixAngle = [];
        let matrixLength = [];
        let figureLen = 0;
        let vector1;
        let vector2;
        for (len = pointList.length - 1, i = len; i >= 0; i--) {
            if (i === 1) {
                vector1 = this.createVector(pointList[i], pointList[i - 1]);
                vector2 = this.createVector(pointList[i - 1], pointList[len]);
            }
            else if (i === 0) {
                vector1 = this.createVector(pointList[i], pointList[len]);
                vector2 = this.createVector(pointList[len], pointList[len - 1]);
            }
            else {
                vector1 = this.createVector(pointList[i], pointList[i - 1]);
                vector2 = this.createVector(pointList[i - 1], pointList[i - 2]);
            }
            // let a = this.computeDotProduct(vector1, vector2);
            // angleDeg = this.getAngle(vector1, vector2) * 180 / Math.PI;
            angleRad = this.getAngle(vector1, vector2);
            angleDeg = angleRad * 180 / Math.PI;
            figureLen += this.computeVectorLenght(vector1);
            matrixAngle[i] = angleRad;
            matrixLength[i] = this.computeVectorLenght(vector1);
            // let computeDotTemp = this.computeDotProduct(vector1, vector2);
            // let multipleVektorsLenght = this.computeVectorLenght(vector1)*this.computeVectorLenght(vector2);
            // let cosAngle =  computeDotTemp / multipleVektorsLenght;
            // angleDeg = Math.acos(cosAngle) * 180 / Math.PI;
            // angleRad = Math.acos(cosAngle);
            // angle = Math.acos(this.computeDot(vector1, vector2)) * 180 / Math.PI;
            //debugger;
        }
        return matrixAngle;
    }
    compare(figure1, figure2) {
        if (figure1.length !== figure2.length)
            return false;
        for (len = figure1.length - 1, i = len; i >= 0; i--) {
        }
    }
}
/* harmony default export */ __webpack_exports__["a"] = (TurningFunction);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const squareOne = [
    [20, 20],
    [40, 20],
    [40, 50],
    [20, 50]
];
/* harmony export (immutable) */ __webpack_exports__["a"] = squareOne;

const squareTwo = [
    [25, 25],
    [45, 25],
    [45, 55],
    [25, 55]
];
/* harmony export (immutable) */ __webpack_exports__["b"] = squareTwo;

const triangle = [
    [10, 10],
    [30, 30],
    [10, 30]
];
/* unused harmony export triangle */

const concavePolygon = [
    [10, 10],
    [20, 20],
    [30, 10],
    [30, 50],
    [10, 50]
];
/* unused harmony export concavePolygon */



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const canvas = document.querySelector('.js-canvas');
const context = canvas.getContext('2d');
const drawSquare = () => {
    context.fillStyle = 'rgba(0, 0, 200, 0.5)';
    context.fillRect(30, 40, 50, 50);
};
/* harmony default export */ __webpack_exports__["a"] = (drawSquare);


/***/ })
/******/ ]);
//# sourceMappingURL=app.bundle.js.map