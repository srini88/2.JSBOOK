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


// I expected both the log statements to print ["pepsi"] since both person1 and person2 point to the same base array favorites on the prototype, and since person2 modified it at last to ["pepsi"], I expected the both the outputs to be ["pepsi"]. 


// You can append to an array using push and you can empty an array by setting its length to 0. As an example:

person1.favorites.push( "boo" );   /// we are pushing to person1 instance// not prototype ones
//person2.favorites.length = 0;        
person2.favorites.push( "foo" );/// we are pushing to person1 instance// not prototype ones


console.log(person1.favorites);  //["coke"]
console.log(person2.favorites);  //["pepsi"]

///answer

////check my question
//http://stackoverflow.com/questions/36491463/updating-a-prototype-using-an-instance-in-javascript/36491505?noredirect=1#comment60591402_36491505