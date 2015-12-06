"use strict";

var assert = require('assert');
var dataset = require('../lib/dataset');
var QuadTree = require('../lib/quadtree');
var Rectangle = require('../lib/datapoint');

describe('QuadTree', function () {
    it('Correctly Calculate the Intersection with a Rectangle', function () {
        let dataSet = dataset("../data/dataset.txt");
        let rect = new Rectangle(-0.1, -0.1, 0.1, 0.1);

        let expectedResult = dataset("../data/expected_dataset.txt");
        let actualResult = getIntersectedSetUsingQuadTree(dataSet, rect);

        actualResult.sort(compareDataPoints)
        expectedResult.sort(compareDataPoints)
        identical(actualResult, expectedResult);
    });

    function getIntersectedSetUsingQuadTree(dataSet, rect) {
        throw new Error("Not Yet Implemented");
    }

    function identical(actual, expected) {
        assert.equal(actual.length, expected.length, "Different Number of DataPoints in result arrays");

        for (let i = 0; i < actual.length; i++) {
            let currentActual = actual[i];
            let currentExpected = expected[i];
            assert.equal(currentActual.x, currentExpected.x, `Datapoints at position ${i} have different x values [${currentActual.x}] and [${currentExpected.x}]`);
            assert.equal(currentActual.y, currentExpected.y, `Datapoints at position ${i} have different x values [${currentActual.y}] and [${currentExpected.y}]`);
        }
    }

    function compareDataPoints(o1, o2) {
        let r1 = Math.sqrt(o1.x * o1.x + o1.y * o1.y);
        let r2 = Math.sqrt(o2.x * o2.x + o2.y * o2.y);

        // TODO this probably doesn't handle NaN vs -0.0 vs 0.0 correctly
        if (r1 < r2) {
            return -1
        } else if (r1 > r2) {
            return 1;
        } else {
            return 0;
        }
    }

});