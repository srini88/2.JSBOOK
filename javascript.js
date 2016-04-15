Imagine you don't use constructors in your code, but instead use Object.create to generate objects with a particular prototype. Your program might be architected to use no constructors at all:

var superProto = {
    // some super properties
}

var subProto = Object.create(superProto);
var subProto.someProp = 5;

var sub = Object.create(subProto);
Here, you don't have a constructor function to use with instanceof. You can only use subProto.isPrototypeOf(sub)




//////when you dont use constructor functions 



It makes little difference when you use constructor functions.  instanceof is a little cleaner, perhaps. But when you don't...:

var human = {mortal: true}
var socrates = Object.create(human);
human.isPrototypeOf(socrates); //=> true
socrates instanceof human; //=> ERROR!
So isPrototypeOf is more general.




var neuesArray = Object.create(Array);

Array.isPrototypeOf(neuesArray);

true

neuesArray instanceof Array

false

neuesArray instanceof Object

true

Array.isArray(neuesArray);

false

Array.prototype.isPrototypeOf(neuesArray);

false

Object.prototype.isPrototypeOf(neuesArray);

true
Do you understand my friend :) - is simple