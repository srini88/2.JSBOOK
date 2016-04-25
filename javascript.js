

// Languages such as Java provide the ability to declare methods private, meaning that they can only be called by other methods in the same class.

// ///////js does not have native way to make shit private...
// ////emulate private methods using closures...
// ////learn module pattern..


// JavaScript does not provide a native way of doing this, but it is possible to emulate private methods using closures. Private methods aren't just useful for restricting access to code: they also provide a powerful way of managing your global namespace, keeping non-essential methods from cluttering up the public interface to your code.

// Here's how to define some public functions that can access private functions and variables, using closures which is also known as the module pattern:


var makeCounter = function(){


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
};

///now two distinc counters...different from the prev expample as we do not have anon fn here...
var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.value()); /* Alerts 0 */
counter1.increment();
counter1.increment();
console.log(counter1.value()); /* Alerts 2 */
counter1.decrement();
console.log(counter1.value()); /* Alerts 1 */
console.log(counter2.value()); /* Alerts 0 */

// Notice how each of the two counters maintains its independence from the other. Its environment during the call of the makeCounter() function is different each time. The closure variable privateCounter contains a different instance each time.

// Using closures in this way provides a number of benefits that are normally associated with object oriented programming, in particular data hiding and encapsulation.