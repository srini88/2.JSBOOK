////////constructors and prototypes

/// chapter 4

//// JS lacks classes, it turns to constructors and prototypes to bring a similar order to objects 


/// constructor - simply a function used with new to create an object 

/// many built in constructors such as Object, Array, Function
/// advantage of constructors is  that objects created with the same constructor contain the same properties and methods 


//// want multiple similar objects, you create your own constructors and therefore your own reference types 

//// construcotr is a function, you define it same way. .. .. 
/// first letter caps



var obj  = new Object;

console.log(obj);  //Object


var obj1 = {};

console.log(obj.constructor);  ///function Object() { [native code] }
console.log(obj1.constructor); ///function Object() { [native code] }

////For generic objects (those created via an object literal or the Object constructor),constructor is set to Object  -- like above

//// for objects created with a custom Constructor function, constructor property on the instance points back to that constructor function instead 


//// even though this relationship exists between an instance and its constructor , better to use instanceof to check the type of an instance 


/// constructor property can be overwritten and therefore may not be completely accurate. 


