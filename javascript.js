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

var property;
for (property in obj1){
	//console.log("property is : " + property + " and value is : "+ obj1[property]);

}
///// 2nd way to print properties using the method keys on the Object
//// it returns a goddammn array 
var properties  = Object.keys(obj1);

//////Object.keys() to retrieve the enumerable properties
console.log(properties);  /////["name", "sayName", "sayHello"]

//// now lets try to print the values of the keys as well sd

for (var i = 0; i < properties.length ; i++){  // .length on an array
	console.log("property is : " + properties[i] + " and value is : "+ obj1[properties[i]]);
}
// this for loop prints the same godammn thing 


/////obj1[properties[i]]  correct
//////obj1.properties[i]  --- wrong, needs to be evaluated right

////why two ways to enumerate the proeprties
/////using for in - it fetches the protype properties as well

/////////Object.keys(obj) wont fetch that shit 
// There is a difference between the enumerable properties returned in a for-
// in loop
// and the ones returned by Object.keys(). The for-in loop also enumerates prototype
// properties, while Object.keys() returns only own (instance) properties.