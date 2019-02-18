/**
 * Test for class Card.
 */
"use strict";

/* global describe it */

var assert = require("chai").assert;

describe("Test chai API", function() {
    describe("Test undefined variable", function() {
        it("should pass", function() {
            let res;

            assert.isUndefined(res, 'this is undefined');
        });
    });
    describe("Test defined variable", function() {
        it("should pass", function() {
            let res ='something';

            assert.isDefined(res, 'this is defined');
        });
    });
    describe("Test undefined function", function() {
        it("should pass", function() {
            let res = 'this is a string';

            assert.isNotFunction(res, 'Not a function');
        });
    });

    describe("Test defined function", function() {
        it("should pass", function() {
            let res = function() {
              return "Bingo!";
            }

            assert.isFunction(res, 'This is a function');
        });
    });
});
