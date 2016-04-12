var a = (function(x){
    delete x;
    return x;
})(1);

console.log(a);  //prints 1


//http://stackoverflow.com/questions/9053842/advanced-javascript-why-is-this-function-wrapped-in-parentheses?lq=1

///mmediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function. This pattern has been referred to as a self-executing anonymous function,[2] but Ben Alman introduced the term IIFE as a more semantically accurate term for the pattern, shortly after its discussion arose on comp.lang.javascript

(function() {
  // some code
})();

// This provides a way to execute some JS code in it's own scope. It's usually used so that any variables created within the function won't affect the global scope

function foo() {
  // some code
}
foo();


// But this requires giving a name to the function, which is not always necessary. Using a named function also means at some future point the function could be called again which might not be desirable. By using an anonymous function in this manner you ensure it's only executed once.


// by using an anonymous function in this manner you are ensuring it is only executed once....  executed only once


/// the below syntax is invalid   ---- Because you have to wrap the function in parens in order to make it parse as an expression. More info here
function() {
  // some code
}();

///The below is IIFE
(function(){

})();

// Allows 'some code' to be executed immediately, as if it was just written inline, but also within its own scope so as not to affect the global namespace (and thus potentially interfere with or be interfered with by, other scripts).

// You can pass arguments to your function just as you would a normal function, eg

(function(x) {
  // some code
})(1);


// Three more common wordings:

// Crockford's preference - parens on the inside
(function() {
  console.log('Welcome to the Internet. Please follow me.');
}());

(function() {
  console.log('Welcome to the Internet. Please follow me.');
})();

!function() {
  console.log('Welcome to the Internet. Please follow me.');
}();