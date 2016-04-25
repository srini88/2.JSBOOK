

// Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

// ///////js does not have native way to make shit private...
// ////emulate private methods using closures...
// ////learn module pattern..


// JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

// Here's how to define some public functions that can access private functions and variables, using closures which is also known as the module pattern:


var makeCounter = (function(){


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

////see here using anon func for make counter...only executed once...
/////so counter1 and counter2 deal with the same shit....
///look at next commit to make the counters different...
///for that, you should not use anon fun....v v imp

var counter1 = makeCounter;
var counter2 = makeCounter;
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 1 */