// changin this 

// this is very useful in JS 
// change this value to achieve different goals
// there are three function methods that allow you to change the value of this 

// fns are objects, objects can have methods so functions can too 


// the call () method 

// executes whatever function with a particular "this" you specify 
// and also with parameters 

// first parameter of call is the value to which "this" should be equal when the funtion is executed 
// all other aprameters are the parameters that should be passed into the fucntion



// function say(){
// 	console.log(this.name);
// 	console.log(this);
// }

// 

// say();  // prints srini and window 

function say(){
	console.log(this.name);
}

var person1 = {
	name: "srinivas"
};

var person2 = {
	name : "viswanath"
};

var name = "srini";

say.call(this);      // first parameter to call is the object you want this to be ... you just used this here .. so it takes global and the global name outside any object, in this case srini
say.call();   // gives srini too -- by not giving this- think it takes global 

// we are explicity specifying the value of this below 
say.call(person1);  // make this point to person one , so in say method this.name is serinivas
// srinivas

say.call(person2);

// viswanath












