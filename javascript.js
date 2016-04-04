
// now reuse the same function on different objects 


var person1 = {

	name :"srinivas",
	sayName : sayNameAll   // copying one function to another 
};


var person2 = {

	name :"viswanath",
	sayName : sayNameAll
};


var name = "pussy";

function sayNameAll(){
	console.log(this.name);
	console.log(this);
}


person1.sayName();  // srinivas  // object
person2.sayName();  // viswanath  // object
sayNameAll();  // pussy   // window 
















