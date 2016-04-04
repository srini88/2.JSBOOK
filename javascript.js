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

// lets give second parameter now 


// lets not use object now, simply use undefined 

function say(name, profession){
	console.log("my name is "+ name + " and profession is  "+ profession);
}


say("srini", "developer");  //my name is srini and profession is  developer

say.call(undefined, "pv", "tester");  //my name is pv and profession is  tester
say.apply(undefined, ["vas", "performer"]);  //my name is vas and profession is  performer

//say.call(undefined, ["vas", "performer"]);  // wrong, cant use array in call - some stupid results 









