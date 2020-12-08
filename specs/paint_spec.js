const assert = require('assert');
const Paint = require ('../paint.js');

describe('Paint', function(){

    let green;
    let blue;

    beforeEach( function() {
        green = new Paint(20, false);
        blue = new Paint(10, true)
    });

    it("should have a set volume in litres", function (){
        const actual = green.litres
        assert.strictEqual(actual, 20);
    });

    it("should check if empty", function () {
        blue.checkPaint()
        const actual = blue.isEmpty;
        assert.strictEqual(actual, true)
        green.checkPaint();
        assert.strictEqual(green.isEmpty, false)
    });

    it("should be able to empty", function (){
        green.emptyPaint();
        const actual = green.isEmpty;
        assert.strictEqual(actual, true);
    });











})