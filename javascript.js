/////Constructor stealing...

///because inherittance is accomplised through prottype chains in JS, you dont need to call an object's supertype constructor....

///if you do want to call the supertype constructor from the subtype construcot , then you need to take advantage of how JS functions work..

///use call and apply...which allow functions to be called with a different this value.... //this is called constructor stealing...

///you basically call the supertype construcotr from the subtype constructor using either call or apply to pass in the newly createed object...


///in effect, you are stealing the supertype construcor for your own object...


function Rectangle(length, width){
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function() {
return this.length * this.width;
};
Rectangle.prototype.toString = function() {
return "[Rectangle " + this.length + "x" + this.width + "]";
};

///before 
// function Square(size){
//  +	this.length = size;
//  +	this.width  = size;
//  +}

///now 
//inherit from Rectangle 

function Square(size){
	Rectangle.call(this, size, size);
	//optiinal : add new properties or override existing ones here..
}

Square.prototype = Object.create(Rectangle.prototype, {
							constructor: {
							configurable: true,
							enumerable: true,
							value: Square,
							writable: true
							}
});

Square.prototype.toString = function() {
return "[Square " + this.length + "x" + this.width + "]";
};

var square = new Square(6);
console.log(square.length); // 6
console.log(square.width); // 6
console.log(square.getArea()); // 36


// The  Square constructor calls the Rectangle constructor and passes in
// this as well as size two times (once for length and once for width). Doing
// so creates the length and width properties on the new object (square) and makes
// each equal to size.

////these lenght and width are created on the square instance...

 console.log(square.hasOwnProperty("length"));  //true
 console.log(square.hasOwnProperty("width")); //true
 console.log(square.hasOwnProperty("getArea"));  //false

  console.log(Rectangle.prototype.hasOwnProperty("getArea"));  //true

//   This is the way to avoid redefining properties from a
// constructor from which you want to inherit. You can add new properties
// or override existing ones after applying the super type constructor.

// This two-step process is useful when you need to accomplish inheritance
// between custom types. You’ll always need to modify a constructor’s
// prototype, and you may also need to call the supertype constructor from
// within the subtype constructor. Generally, you’ll modify the prototype
// for method inheritance and use constructor stealing for properties. This
// approach is typically referred to as pseudoclassical inheritance because it
// mimics classical inheritance from class-based languages.