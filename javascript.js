function Person(name){
	this.name = name;
}


// Person.prototype.sayName = function(){
// 	console.log(this.name);
// };

//// you can store other types of data on the prototype, but be careful when using reference values.... 
//// these godammn values are shared across instances, 
///// one instance change value on the prototype method or something, 
//// the other instance can see too

//// now instand of sayName we will add a godammn array 

Person.prototype.favorites = [];

var person1 = new Person("srini");
var person2 = new Person("vas");


person1.favorites = ["coke"];
person2.favorites = ["pepsi"];

console.log(person1.favorites);  //["coke"]
console.log(person2.favorites);  //["pepsi"]

console.log(Person.prototype.favorites);  //[]  still an empty araay



	
// so we are able to modify the prototype using an instance right? – Wild Widow 8 mins ago   
// 1	up voted
 		
// @WildWidow Not exactly, you can't modify the prototype through an instance , but if the prototype has any objects (including arrays) on it, you can modify those objects