////Imp stuff

////Lets inherit from other objects......

////

var person1 = {
	name : "Nichols", 
	sayName : function(){
		console.log(this.name);
	}
};


var person2 = Object.create(person1, {
	name :{
		value : "Nigga", 
		enumerable :true, 
		configurable : true, 
		writable: true
	}
});


// This code creates an object, person1, with a name property and a sayName()
// method. The person2 object inherits from person1, so it inherits both name and
// sayName().

// However, person2 is defined via Object.create(), which also defines
// an own name property for person2.
// This own property shadows the prototype
// property of the same name and is used in its place. So, person1.sayName() outputs
// "Nicholas", while person2.sayName() outputs "Greg".

// Keep in mind that
// sayName() still exists only on person1 and is being inherited by person2

person1.sayName();  //Nichols
person2.sayName();  //Nigga


console.log(person1.hasOwnProperty("name"));  //true
console.log(person2.hasOwnProperty("name"));  //true
///above - both have their own properties "name"


console.log(person1.hasOwnProperty("sayName"));  //true
console.log(person2.hasOwnProperty("sayname")); //false = coz inherited from prototype person1 -- wont' show up 
//will show up in for in though 
console.log("sayName" in person2);  //true --- see -- 


//console.log(person2.name);


console.log(person1.isPrototypeOf(person2));  //true


//remember
// p2.proto = person1
// p1.proto = Object.prototype

//Object.proto = null 

// That chain usually ends with
// Object.prototype, whose [[Prototype]] is set to null.