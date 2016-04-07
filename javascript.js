////// empty coonstructor isnot useful,, whole point of a constructor is to make it easy to create more objects with same properties and methods 


//// in Constructor - --- add properties to this variable...


function Person(name){

	this.name = name;
	this.sayName = function(){
		console.log("saying name %s", this.name);
	}
}


function Person(name){

	this.name = name;
	this.sayName = function(){
		console.log("saying name %s", this.name);
	}
	return 5;  ///some random return, still works, because new operator makes sure to return the instance instead
}


// You can also explicitly call return inside of a constructor. If the returned value
// is an object, it will be returned instead of the newly created object instance. If the
// returned value is a primitive, the newly created object is used and the returned
// value is ignored.


/// we are accepting a single named parameter and assigning it to the name property of the this object. 
//// the this object is automatically created by new when you call the constructor and it is an instance of the constructor's type 

//// no need to return a value from the function because the new operator takes care of return value 


var p1 = new Person("srini");
var p2 = new Person("vas");

p1.sayName();  // srini
p2.sayName();  //vas


// each object has its own name property, so sayName returning two different values 