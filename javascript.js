//currying is a way of constructing functions that allows partial application of a functions' arguments...

// you apass all the of the arguments a function is expecting and get the result...or pass a subset of  those arguments and get a function back that's waiting for the rest of the arguments....

var greet = function(greeting, name) {
  console.log(greeting + ", " + name);
};
greet("Hello", "Heidi"); //"Hello, Heidi"

//the above function requires both....name and greeting...in order to work properly....
///rewire the function using simple nested currying...









