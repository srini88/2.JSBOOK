


var person = {
	name :"srin", 
	age: 312
};


var obj = Object.getOwnPropertyNames(person);   ///getOwnPropertyNames returns an arraya 

console.log(obj);  ////["name", "age"]

console.log(Array.isArray(obj));   //true


//// great question ---- difference between Object.getOwnPropertyNames vs Object.keys - both seem to return an array 


There is a little difference. Object.getOwnPropertyNames(a) returns all own properties of the object a  irrespective of if it is enumerable or not . 

Object.keys(a) returns all enumerable own properties. --if it is not enumerable it wont' return 

var a = {};
Object.defineProperties(a, {
    one: {enumerable: true, value: 'one'},
    two: {enumerable: false, value: 'two'},
});
Object.keys(a); // ["one"]
Object.getOwnPropertyNames(a); // ["one", "two"]

If you define a property without providing property attributes descriptor (meaning you don't use Object.defineProperties), for example:

a.test = 21;
then such property becomes an enumerable automatically and both methods produce the same array


//http://stackoverflow.com/questions/22658488/object-getownpropertynames-vs-object-keys