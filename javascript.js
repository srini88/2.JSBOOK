// the second methiod you can use to manipulate this is appy()
// apply() works exactly the same as call() it accepts only two parameters 
// call () accepts many 

// two parameters 
// the value for thsi 
// ann array or array-liek object of parameters to apss to the function 
// you can use the arguments object as the second parameters s

// instead of naming each parameters using call(), you easily pass arrays to apply() as the second argument 

// The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly. A useful mnemonic is "A for array and C for comma."



// theFunction.apply(valueForThis, arrayOfArgs)

// theFunction.call(valueForThis, arg1, arg2, ...)


// remember the second parameter of apply and call is optional 
// in that case both are same, both behave the same 

function say(){
	console.log(this.name);
}

var name = "A";

var p1 = {
	name : "p1"
};

var p2 = {
	name :"p2"
};

// not giving second parameter 
say.apply(this);  // A
say.apply(p1);  // P1
say.apply(p2);  //P2



// lets give second parameter now 