

// Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

// ///////js does not have native way to make shit private...
// ////emulate private methods using closures...
// ////learn module pattern..


// JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

// Here's how to define some public functions that can access private functions and variables, using closures which is also known as the module pattern:


var counter = (function(){

	//creted a single env which is shared by 3 fns...counter.increment, counter.decrement and counter.value...

	//the shared env is in the body of an anon function, which is executed as soon as it has been defined.....
	///privateCounter and a fun changeBy are private items...
	///cannot be accessed directly from outside the anon fn...
	///they must be acessed by 3 public fns that are returned from the anonymous wrapper...


	//these 3 public fns are closures that share the same env....(due to lexical scoping)
	var privateCounter = 0;
	//console.log(privateCounter);
	function changeBy(val){
		privateCounter += val;
	}


	return{
		increment: function(){
			changeBy(1);
		},
		decrement :function(){
			changeBy(-1);
		},
		value: function(){
			return privateCounter;
		}

	};
})();



console.log(counter);   //returns an obj with dec, inc and value
console.log(counter.value());  //0
counter.increment();
counter.increment();
console.log(counter.value());  //2
counter.decrement();
console.log(counter.value());   //1