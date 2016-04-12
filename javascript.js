
///http://perfectionkills.com/understanding-delete/

var b = 5;

delete b;   ///does not work   ///returns false

console.log(b);   ////// still prints 5


a = 2;

delete a;   //works
console.log(a);  ///a is not defined


The point is the delete operator removes a property from an object. It cannot remove a variable. So the answer to the question depends on how the global variable or property is defined.

(1) If it is created with var, it cannot be deleted.

For example:

var g_a = 1; //create with var, g_a is a variable 
delete g_a; //return false
console.log(g_a); //g_a is still 1
(2) If it is created without var, it can be deleted.

g_b = 1; //create without var, g_b is a property 
delete g_b; //return true
console.log(g_b); //error, g_b is not defined


http://stackoverflow.com/questions/1596782/how-to-unset-a-javascript-variable