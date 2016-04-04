/// you want to write a sum method
// you dont know how many arguments you need 

/// so you got to use the arguments[] array 


// Sometimes, however, using arguments is actually more effective than
// naming parameters. For instance, suppose you want to create a function
// that accepts any number of parameters and returns their sum. You can’t
// use named parameters because you don’t know how many you will need,
// so in this case, using arguments
// is the best option.

// using while loop

// The sum() function accepts any number of parameters and adds them
// together by iterating over the values in arguments with a while loop


function sum(){
	var result = 0;
	var len  = arguments.length;   // arguments is accessible inside this function itself 
	var i = 0;
	while (i < len){
		result += arguments[i];
		i++;
	}
	return result;
}

console.log(sum(2, 3));  //5
console.log(sum(2, 3, 4));  //9
console.log(sum(2, 3, 4, 5));  //14


// using for loop and function expression 

var sum1 = function(){
	var result = 0;
	var len = arguments.length;

	for (var i =0; i < len; i++)
	{
		result += arguments[i];
	}
	return result;
};

console.log(sum1(2, 3));  //5
console.log(sum1(2, 3, 4));  //9
console.log(sum1(2, 3, 4, 5));  //14
console.log(sum1());  //0