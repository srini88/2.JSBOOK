var p1 ={

	a:3, 
	b:4
}

//do a shallow copy..

function sCopy(old){
	var newObj ={};


	var prop;
	for (prop in old){  //doont want to add prototype shit...
		///better to include another if with   if(oldObj.hasOwnProperty(i))
		//console.log(prop, old[prop])
		//console.log(newObj.prop) //this is wrong ..does not work..use bracket notatiin..
		newObj[prop] = old[prop];


	}

	return newObj;

}

var newObj = sCopy(p1);
console.log(newObj)

newObj.a = 10;  //chaning new Obj does not change p1 ni the next line..shallowCopy
console.log(newObj)
console.log(p1)  //does not get changed

var p2 = p1;  //this is shit.. not even a shallow copy..

p2.a = 6;
console.log(p2);  //changing p2 changes p1 in the next line
console.log(p1)  //shit gets changed..