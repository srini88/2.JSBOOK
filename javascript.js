var arr = [];

console.log(arr.constructor);  //function Array() { [native code] }

console.log(delete arr.constructor);   //true

/// deletig, but still the below statemtn give s
console.log(arr.constructor);  //function Array() { [native code] }

console.log(Array.constructor);   /// function Function() { [native code] }

console.log(Function.constructor);/// function Function() { [native code] }

