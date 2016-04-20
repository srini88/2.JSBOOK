////2nd fucking way...

Square.prototype does not actaully need to be overwritten with a Rectangle object though...

Square.prototype = new Rectangle;   //saying not required./

//however for inheritance to happen Square.prototype needs to somehow linkk to Rectangle.prototype in order for inheritance to happen....

//2nd way..simplify the shit using Object.create() once again...

// inherits from Rectangle
function Square(size) {
	this.length = size;
	this.width = size;
}

//do this shit instead of new Rectangle and all that...

Square.prototype = Object.create(Rectangle.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: Square,   ///remmember very imp
		writable: true
	}
});

//in this versition Square.prototype is overwritten with a new object that inherits from Rectangle.prototype and the Rectangle construcotr is never called...

////this code behaves exactly the same as the 1st way...
///the prototype chain remains intact.....

// Always make sure that you overwrite the prototype before adding properties to it,
// or you will lose the added methods when the overwrite happens.

///awesome above sentence...
//so if you do this shit 

Square.prototype.toString = function() {
return "[Square " + this.length + "x" + this.width + "]";
};

// and then try to inherit...
Square.prototype = Object.create(Rectangle.prototype, {
	constructor: {
		configurable: true,
		enumerable: true,
		value: Square,   ///remmember very imp
		writable: true
	}
});

///you fucking lost toString and all the added fucking methods on the Square.prototype..... whioch we do not want...
///so override first and add the methodds later..