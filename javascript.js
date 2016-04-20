///because the prototype property is writable ,  you can change the prototype chain by overwriting it...

////1st way...2nd way in the next commit

function Rectangle (length, width){
	this.length = length;
	this.width = width;
}

Rectangle.prototype.getArea = function (){
	return this.length * this.width;
};

Rectangle.prototype.toString = function(){
	return "[Rectangle " + this.length + "x" + this.width + "]";
};

///////inherit from Rectangle...
///no shit here..for inheriting
function Square(size){
	this.length = size;
	this.width  = size;
}

Square.prototype = new Rectangle();  ////very very imporotant -- when dealing with constructor functions...set the inherited shit to the instance of Boss shit...
///since you fuck up the prototype by inheriting...you got to set the constructor again...

Square.prototype.constructor = Square;

///setting up toString on Square -- again..toString also on rectanlgel..
Square.prototype.toString = function() {
return "[Square " + this.length + "x" + this.width + "]";
};


///now lets create objects...

var rect = new Rectangle(5, 10);
var square = new Square(6);

console.log(rect.getArea());  //50
console.log(square.getArea());  //36//// got from the boss ..
  
console.log(rect.toString());  //[Rectangle 5x10]
console.log(square.toString());  //[Square 6x6]  ////got overriden right..didnt go to the Boss for this...


console.log(rect instanceof Rectangle);  //true
console.log(rect instanceof Object); //true 

console.log(Rectangle.isPrototypeOf(rect));  //false//not likethis

console.log(square instanceof Square); // true
console.log(square instanceof Rectangle); // true
console.log(square instanceof Object); // true

///remember this shit...
console.log("Later");

console.log(Rectangle.prototype.isPrototypeOf(Square.prototype)); ///true

console.log(Rectangle.prototype.isPrototypeOf(rect)); //true

console.log(Square.prototype.isPrototypeOf(square));  //true
console.log("hello");

console.log(Rectangle.prototype.isPrototypeOf(square));   //true ....it traverses the godammn prootype chain tooo.....

// The prototype chains for square and rect show that both inherit from Rectangle.prototype
// and Object.prototype, but only square inherits from Square.prototype.

// isPrototypeOf checks if an object is within another object's prototype chain so yes it does go multiple levels

///my fucking question
//http://stackoverflow.com/questions/36734890/isprototypeof-usage-when-dealing-with-inheritance-in-javascript

///

// One thing to emphasize is that both traverse the prototype chain, so you cannot assume that there is a one-to-one mapping between a matching prototype and the object in question:



function A () {
  this.a = 1;
}
function B () {
  this.b = 2;
}
B.prototype = new A();
B.prototype.constructor = B;

function C () {
  this.c = 3;
}
C.prototype = new B();
C.prototype.constructor = C;

var c = new C();

// instanceof expects a constructor function

c instanceof A; // true
c instanceof B; // true
c instanceof C; // true

// isPrototypeOf, can be used on any object
A.prototype.isPrototypeOf(c); // true
B.prototype.isPrototypeOf(c); // true
C.prototype.isPrototypeOf(c); // true














