//"use strict";   // use strict should be at the top 
//console.log(delete Object.prototype); // uncaught exception

//"use strict";  without strict
console.log(delete Object.prototype); //false , without strict 




// Say I create an object as follows:

var myObject = {
	"ircEvent": "PRIVMSG",
	 "method": "newURI", 
	 "regex": "^http://.*"
	};
// What is the best way to remove the property regex to end up with new myObject as follows?

// var myObject = {"ircEvent": "PRIVMSG", "method": "newURI"};


console.log(myObject);
delete myObject.regex;   // deletes it 


console.log(myObject);

/////Other ways to delete 

delete myObject.regex;
// or,
delete myObject['regex'];
// or,
var prop = "regex";
delete myObject[prop];


http://stackoverflow.com/questions/208105/how-do-i-remove-a-property-from-a-javascript-object

http://perfectionkills.com/understanding-delete/


a property is assigned to undefined still is a property of an object, so it will not be removed by GC The GC doesn't manage anything about properties





Operator delete is unexpectedly slow!
Look at the benchmark.

Delete is the only true way to remove object's properties without any leftovers, but it works ~ 100 times slower, compared to it's "alternative", setting object[key] = undefined.

This alternative is not the correct answer to this question! But, if you use it with care, you can dramatically speed up some algorithms. If you are using delete in loops and you have problems with performance, read the verbose explanation.

When should one use delete and when set value to undefined ?
An object may be seen as a set of key-value pairs. What I call a 'value' is a primitive or a reference to other object, connected to that 'key'.

Use delete, when you are passing the result object to the code on which you don't have control (or when you are not sure about your team or yourself).

It deletes the key from the hashmap.

 var obj = {
     field: 1     
 };
 delete obj.field;
Use setting to undefined, when you care about performance. It can give a serious boost to your code.

The key remains on its place in the hashmap, only the value is replaced with undefined. Understand, that for..in loop will still iterate over that key.

 var obj = {
     field: 1     
 };
 obj.field = undefined;
Using this method, not all ways of determining property existence will work as expected.

However, this code:

object.field === undefined

will behave equivalently for both methods.