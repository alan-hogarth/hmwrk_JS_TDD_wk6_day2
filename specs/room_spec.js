const assert = require('assert');
const Room = require('../room.js');

describe('Room', function (){

    let room;

    beforeEach( function(){
        room = new Room(14, false)
    });

    it('should have an area', function (){
        assert.strictEqual(room.area, 14)
    });

    it("should be painted", function () {
        assert.strictEqual(room.isPainted, false)
    });


});