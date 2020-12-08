const assert = require('assert');
const Decorator = require ('../decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js');

describe('Decorator', function(){

    let decorator;
    let green;
    let blue;
    let room;

    beforeEach( function(){
        decorator = new Decorator();
        green = new Paint(20);
        blue = new Paint(10);
        room = new Room(18, true)
    });

    it('should start with empty stock', function (){
        const actual = decorator.paintStock
        assert.deepStrictEqual(actual, [])
    });
    
    it('should be able to add paint', function (){
        decorator.addPaint(green);
        const actual = decorator.paintStock;
        assert.deepStrictEqual(actual, [green]);
    });

    it('should be able to calculate total paint', function() {
        decorator.addPaint(green);
        decorator.addPaint(blue);
        const actual = decorator.totalPaint();
        assert.strictEqual(actual, 30);
    });

    it('should be able to calculate if there is sufficient paint for a room', function () {
        decorator.addPaint(green);
        decorator.addPaint(blue);
        const actual = decorator.sufficientPaint(room);
        assert.strictEqual(actual, false);
    });

    it('should be able to paint room if enough paint in stock', function () {
        decorator.addPaint(green);
        decorator.addPaint(blue);
        decorator.paintRoom(room);
        const actual = room.isPainted;
        assert.strictEqual(actual, true);
    });



})