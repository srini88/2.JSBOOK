

// difference between call and apply 
// http://hangar.runway7.net/javascript/difference-call-apply

var p1 = {
	name :"A", 
	age: 21
};

var p2 = {
	name : "B", 
	age : 23
};


var sayHello = function(){
    console.log('Hello, ' + this.name);
};

var sayGoodbye = function(){
    console.log('Goodbye, ' + this.name);
};


// the difference between call and apply comes when you deal with arguments


// say with one argument 
function say(greeting){
	console.log(greeting + " , "+this.name );
}

say.call(p1, "Hello");   // Hello , A
say.call(p2, "Hello");  // Hello , B

// So that's call for you. It runs the function in the context of the first argument, and subsequent arguments are passed in to the function to work with.


// now lets see how it works with multiple arguments


var update = function (name, age){
	this.name = name;   // updating // setting the objects parameters
	this.age = age;
}

// now we have updated here....the objects ka name and age 
update.call(p1, "C", 40);
update.call (p2, "D", 50 );

// lets print them 
say.call(p1, "Hello");  // Hello C 
say.call(p2, "Hello");  // Hello D 

// now you saw the effect right, you could update by sending multiple areguments 


// now we dealt with call 
// The limitations of call quickly become apparent when you want to write code that doesn't (or shouldn't) know the number of arguments that the functions need… like a dispatcher.


var dispatch = function (person, method, args){
	method.apply(person, args);
}

dispatch(p1, say, ['hiya']);   // hiya , C
dispatch (p2, update, ["pussy", 55]);  // updating here wont print anything // so printing using say below
// what you should see is that name in the p2 object should change to pussy


say.call(p2, "Hello");  // prints Hello Pussy 

// So that's where apply comes in - the second argument needs to be an array, which is unpacked into arguments that are passed to the called function.

// So that's the difference between call and apply. Both can be called on functions, which they run in the context of the first argument. In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an array that it unpacks as arguments for the called function.