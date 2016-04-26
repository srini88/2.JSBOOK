

////deep curry

var greetDeeplyCurried = function(greeting) {
  return function(separator) {
    return function(emphasis) {
      return function(name) {
        console.log(greeting + separator + name + emphasis);
      };
    };
  };
};


console.log(greetDeeplyCurried("hey"));


console.log(greetDeeplyCurried("Hello")(", "));

///returs a partial fn
// function (emphasis) {
//       return function(name) {
//         console.log(greeting + separator + name + emphasis);
//       };
//     }

console.log(greetDeeplyCurried("Hello")("...")("?"));

//returns another partial fn 
// function (name) {
//         console.log(greeting + separator + name + emphasis);
//       }