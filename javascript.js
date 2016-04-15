

//////prototyepes also allow you to modify the builtin objects that come standard in JS engine.... 
/////adding a new method for use on all strings is as simple as modifying String.prototype


///This message is derived from String... this message automatically has access to the caps method through the prototype


var message = "hello world";

console.log(message);

//console.log(message typeof String);    ///wrong syntax   --- remmber this kind of syntax is for instanceof

console.log(typeof message);   //string


/////Lets put shit on prototype of the built in itself 
/////basically modifying the  primitive wrapper type prototype



String.prototype.capitalize = function(str){
	return str.toUpperCase();
}

//console.log(capitalize(message));  ///wrong syntax -- have to call on object message...
console.log(message.capitalize(message));  // HELLO WORLD

/////you are passing in message to capitalizede  - which you dont need..
////instead dont pass message and have capitalize use this like below 



String.prototype.caps = function (){
	return this.toUpperCase();
}

console.log(message.caps());  ///HELLO WORLD


/////fun to modify builtin objects to experiment, 


/////from recap ....The constructor
// property is actually defined on the prototype because it is shared among
// object instances.

// what saying is 

// Person.prototype.constructor = Person;