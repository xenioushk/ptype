const assert = require("chai").assert;

describe("Our Testing Container", function() {

    let a = 2,
        b = 5;

    // Summation Equality.
    it.skip("Check Summation", function() {
        assert.equal(a + b, 7);
    })


    // Subraction Chec

    it("check subtraction", function() {
        assert.equal(b - a, 3);
    })



})