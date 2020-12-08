const Paint = function(litres, isEmpty=false){
    this.litres = litres;
    this.isEmpty = isEmpty;
}

Paint.prototype.checkPaint = function (){
    if (this.litres === 0){
    this.isEmpty = true;
    }
}; 

Paint.prototype.emptyPaint = function() {
    this.isEmpty = true;
};

module.exports = Paint;