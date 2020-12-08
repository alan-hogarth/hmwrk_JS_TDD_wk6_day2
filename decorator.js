const Room = require("./room");

const Decorator = function (){
    this.paintStock = [];    
};

Decorator.prototype.addPaint = function(newPaint) {
    this.paintStock.push(newPaint);
};

Decorator.prototype.totalPaint = function(){
    let calculatePaint = 0
    for (paint of this.paintStock) {
        calculatePaint += paint.litres
    }
    return calculatePaint
};

Decorator.prototype.sufficientPaint = function(room) {
    if (this.totalPaint >= room.area) {
        return true
    } else {
        return false
    }

};

Decorator.prototype.paintRoom = function(room) {
    if (this.sufficientPaint(room)) {
        room.isPainted = true;
    }
};

module.exports = Decorator;