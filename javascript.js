///what is “strict mode” and how is it used?


http://stackoverflow.com/questions/8651415/what-is-strict-mode-and-how-is-it-used

ECMAScript5 introduced strict mode 


Its main purpose is to do more checking.

Just add "use strict"; at the top of your code, before anything else.

For example, blah = 33; is valid JavaScript. It means you create a completely global variable blah.

But in strict mode its an error because you did not use the keyword "var" to declare the variable.

Most of the time you don't mean to create global variables in the middle of some arbitrary scope, so most of the time that blah = 33 is written it is an error and the programmer didn't actually want it to be a global variable, they meant to write var blah = 33.

It similarly disallows a lot of things that are technically valid to do. NaN = "lol" does not produce an error. It also doesn't change the value of NaN. using strict this (and similar weird statements) produce errors. Most people appreciate this because there is no reason to ever write NaN = "lol", so there was most likely a typo.


Strict mode was also designed in the hope that developers who limit themselves to strict mode would make fewer mistakes and that the bugs they do make would manifest in more obvious ways.


strict mode changes silent errors to throw errors 

Strict mode makes several changes to normal JavaScript semantics.

strict mode eliminates some JavaScript silent errors by changing them to throw errors.

strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations.

strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.

ECMAScript5 introduces some new objects and properties and also the so-called "strict mode"


Invoking Strict Mode in Code

Strict mode applies to entire scripts or to individual function. It doesn’t apply to block statement enclosed in {} braces, attempting to apply it to such contexts does nothing.

Entire Script:

Let say we are creating app.js so adding first statement use script will enforce strict mode for entire code.

// app.js whole script in strict mode syntax
“use strict”;
// Now you can start writing your code 
Strict mode for function:

To Invoke strict mode for a function, put the exact statement “use strict”; in the start of function body before any other statement.

function yourFunc(){
 "use strict";

 // Your function code logic
}
Strict mode incorporate several changes to normal Javascript semantics. First strict mode eliminate some JavaScript silent error by changing them to throw errors.

For Instance: Code using Strict Mode

enter image description here

In above code example without using strict mode in code It won't throw an error. As we are accessing variable x without declaring it. So in strict mode accessing undeclared variable throw an error.

Now let's try to access variable x without declaring it without strict mode.

(function(){
    x = 3;
})();

// Will not throw an error








With strict mode, you can not, for example, use undeclared variables.

Declared at the beginning of a JavaScript file, it has global scope (all code will execute in strict mode):

Example
"use strict";
x = 3.14;       // This will cause an error (x is not defined)



"use strict";
myFunction();

function myFunction() {
    y = 3.14;   // This will also cause an error (y is not defined)
}


Declared inside a function, it has local scope (only the code inside the function is in strict mode):

x = 3.14;       // This will not cause an error. 
myFunction();

function myFunction() {
   "use strict";
    y = 3.14;   // This will cause an error (y is not defined)
}


Strict mode changes previously accepted "bad syntax" into real errors.


Using an object, without declaring it, is not allowed:

"use strict";
x = {p1:10, p2:20};      // This will cause an error (x is not defined)


Deleting a variable (or object) is not allowed.

"use strict";
var x = 3.14;
delete x;                // This will cause an error


Deleting a function is not allowed.

"use strict";
function x(p1, p2) {}; 
delete x;                // This will cause an error 


"use strict";
var obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error

"use strict";
delete Object.prototype; // This will cause an error


Future reserved keywords are not allowed in strict mode. These are:

implements
interface
let
package
private
protected
public
static
yield


"use strict";
var public = 1500;      // This will cause an error