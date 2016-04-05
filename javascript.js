var obj1 = {
	name : "Srinivas"
};
// adding a new method 
obj1.sayName = function(){
	console.log("name is  "+  this.name);
}

obj1.sayHello = function(){
	console.log("saying hello : name is  "+  this.name);
}
//////////ENUMERATIon
////by default all properties added to an object are enumerable 
////iterate over them using a for - in loop

//console.log(obj1);
var property;
for (property in obj1){
	console.log("property is : " + property + " and value is : "+ obj1[property]);

}
///property value is filled with the next enumerable property on the object until all properties have been used
/// using bracket notation to retrive the value of the object property 
//obj1[property]


//output 
// property is : name and value is : Srinivas
// javascript.js:19 property is : sayName and value is : function (){
// 	console.log("name is  "+  this.name);
// }
// javascript.js:19 property is : sayHello and value is : function (){
// 	console.log("saying hello : name is  "+  this.name);
// }

