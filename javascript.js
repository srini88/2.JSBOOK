////2nd beast...

////Constructor Inheritance....

///////any function has a prototype property that can be modified or replaced...

////That prototype property is automatically assigned to be a new generic object that inherits from Object.prototype and has a single own property called constructor........


function yourConstructor(){


}

///in the back JS engine does this shit...
////sets up construcor property for your shit....

yourConstructor.prototype = Object.create(Object.prototype, {

	constructor : {
		enumerable :true, 
		configurable : true, 
		writable : true, 
		value : yourConstructor 
	}
});


/////settting the constructor prototype propperty to an object that inherits from Object.prootytpe which means any instances of yourConstructor also inherit from object.prototype.....yourconstructor is a subtype of Object...and Object is a supertype of Yourconstructor...