//// //// you added array stuff defined on Person.prototype using instances, many developers use a more succinct pattern that involves replacing the prototpe with an object literal 

///// replace prototype with an objecct literal 

function Person(name){
	this.name = name;
}
//// see the object literal 
Person.prototype = {
	sayName: function(){   //// since object literal usiong :
		console.log("name is %s", this.name);
	}, 
	toString:function(){
		return "[Person " + this.name +"]";
	}
};



function Food(){
	this.sayName = function (){
		console.log("boo");
	}
}

var f1 = new Food;


console.log(f1.constructor === Food);  //true

console.log(f1.constructor === Object); ///false ---- thought it would be true... remmeber it would only go one level for .constructo//

/// now read the below perosn one ... you will know the problem with person1.constructor --- it is going mroe than one level 

console.log(f1 instanceof Food);  //true
console.log(f1 instanceof Object); ///true 

/// we defined two methods on the prototype sayName and toString
///// this method is good because we dont need to type Person.prototype multiple times -- (for adding two methods , we got to add each method on person.prototype right)  -- this eliminates that by means of an object defeined on the prototype itself 


var person1 = new Person("Nicholas");

console.log(person1 instanceof Person);   ///true 

console.log(person1.constructor === Person);  //// we expected true ... because it is indeed inherited from the Person... we got false 

console.log(person1.constructor === Object);  //true /.////went more than one level 


// we used object literal notation Person.prototype ----
/// Object literal notation to override the prototype changed the constructor property so taht it now points to Object instaed of Person
/// this happended because the construcotr property exists on the prototype , not on the object instance 

//// did n't understand clearly 

/// To avoid this, restore the constructor property
/////to a proper value when overwriting the prototype:




function Drink(drink){
	this.drink = drink;
}

Drink.prototype = {
	constructor:Drink,  /// added this line
	sayName:function(){
		console.log(this.drink);
	}, 
	toString: function(){
		return "[Drink " + this.drink +"]";
	}
};

var coke = new Drink("coke");
var pepsi = new Drink("pepsi");

console.log(coke instanceof Drink);  //true
console.log(coke.constructor === Drink);  ////no problem now ///prints true 

console.log(coke.constructor === Object);  //false //// going more than 1 level -- should return false for .construcotr property


//   In this example, the constructor property is specifically assigned
// on the prototype

// It’s good practice to make this the first property on
// the prototype so you don’t forget to include it.
// Perhaps the most interesting aspect of the relationships among
// constructors,
// prototypes, and instances is that there is no direct link
// between the instance and the constructor. There is, however, a direct
// link between the instance and the prototype and between the prototype
// and the constructor.

/// instance -<> prototype
/// prototype -<>construcor   direct links 
//// instance and constructor no direct link

//read page 60