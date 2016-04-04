// function parameters 


// you pass any number of parameters to any function without causing an error 
// function paramters are stored in an array-like structure called arguments 

// just like regular JS array, arguments can grow to contain any number of values 

// values are referenced using numeric indices 

// arguments[0]
// arguments[1]
// arguments[2]


// and there is a length property to determine how many values are present 


// arguments object is automatically avalibale inside any function 


// arguments object is not an instance of Array  and therefore does not have the same methods as an array 


// Array.isArray(arguments) always returns false 


// the length property indicates the function's arity 
// or the number of parameters it expects 

// how many parameters you pass in to a fun , you wont get an error 

// number of paramters a function has determines the function arity or lengh 
// but the number of arguments passed to the function has no effect on the reported arity 


function reflect(value){
	return ++value;
}
console.log(reflect(5));  //6

console.log(reflect.length);  //1
console.log(reflect(5, 6));  // how many you pass , it does not affect arity , only the function definition can affect arity or length , so the next statement still prints 1 

// prints 6


console.log(reflect.length);  //1


function reflect2(value1, value2){
	return ++value1;
}

console.log(reflect2(5));  //6

console.log(reflect2.length);  //2  // because here definitin of the function changed 



function reflect3(boo){
	console.log(reflect3.length);   // could access reflect3 inside 
	//also this.length works 
	console.log(arguments[0]);  // motheryaar

	console.log(Array.isArray(arguments));  //false,., not an array
}

reflect3();  //1
reflect3("motheryaar");  //1 





