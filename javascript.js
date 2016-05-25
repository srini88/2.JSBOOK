function Rectangle (length, width){
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function(){
    return "rect area: "+ (this.length * this.width);
}

function Square(side1){

    Rectangle.call(this, side1, side1)
}


Square.prototype = Object.create(Rectangle.prototype)

var square = new Square(3);

console.log(square.getArea())




