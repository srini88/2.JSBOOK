////The [[prototype ]] property 


//// an instance keeps track of its prototype through an internal propterty called [[prototype]]

////this property is a pointer back to the prototype object that the instance is using

//// when you create a new object using new, the constroctors prototype property is assigned to the [[prototype]] property of the new object 

/// the [[prototype]] property lets multiple instances of an object type refert to the same prototype


// var p1 = new person;
// var p2 = new person;


//both p1 and p2's [[prototype]] property point to the person.prototype


/////how will you read the [[prototype ]] property
////use Object.getPrototypeOf(obj) method 



var obj = {};

//this obj's [[prototype]] property shoudl point to Object.prototype


proto = Object.getPrototypeOf(obj);

console.log(proto);   //Object{}

console.log(proto === Object.prototype);       //true there you go 
////for any generic object liek this one [[prototype]] always refer to Object.prototype

console.log(proto ===Object);/////false   ///proto points to Object.prototype not Object itself


/// some JS engines support a property called __proto__ on all objects..
///// this property allows you to both read from and write to the [[prototype]] property....



