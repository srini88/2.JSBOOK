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


person1.favorites.push( "coke" );  
person2.favorites.push( "pepsi" );


console.log(person1.favorites);  //["coke", "pepsi"]
console.log(person2.favorites);  //["coke", "pepsi"]

///answer

////check my question
//http://stackoverflow.com/questions/36491463/updating-a-prototype-using-an-instance-in-javascript/36491505?noredirect=1#comment60591402_36491505