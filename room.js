const Room = function(area, isPainted=false, allowPaint){
    this.area = area;
    this.isPainted = isPainted;
    this.allowPaint = allowPaint;
};


Room.prototype.paintRoom = function(){
    this.isPainted = true;
}

module.exports = Room