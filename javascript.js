

////modifyiong Object.prototype 

// Object.prototype affects all objects...very dangerous  

Object.prototype.add = function(value) {
return this + value;
};
var book = {
title: "The Principles of Object-Oriented JavaScript"
};


///// you are getting some shit answers -
///in all below  this  points to the  left side of period and value is the one you pass in the argunent 
console.log(book.add(5)); // "[object Object]5"
console.log("title".add("end")); // "titleend"
// in a web browser
console.log(document.add(true)); // "[object HTMLDocument]true"
console.log(window.add(5)); // "[object Window]true"



///another problem whe you add shit to Object.prototype ... that method or whatever becomes enumerable... and will show up in all your for in shit 

///lets test





var obj = {

}

 console.log(Object.prototype.hasOwnProperty("add"));   ////true 

for (prop in obj){

	console.log("property is :" + prop + ", " + "value is : " + obj[prop]);
}
///above prints 
///property is :add, value is : function (value) {
//////return this + value;


///also 

// Object.keys(a) returns all enumerable own properties. --if it is not enumerable it wont' return 

var propKeys = Object.keys(obj);

console.log(propKeys);  ///empty array   ////here it is not returning becuase it is not an own property 




