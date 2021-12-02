import chai from "chai"

import addNumbers from '../App.js';
// import subNumbers from '../sub.js';

const assert = chai.assert;

describe("Testing Container", function() {

    let a = 2,
        b = 5;

    // Summation Equality.
    it("Summation", function() {

        let result = addNumbers(a, b);

        assert.equal(result, 7);
    })


    // Subraction Chec

    it("Subtraction", function() {
        assert.equal(b - a, 3);
    })

})