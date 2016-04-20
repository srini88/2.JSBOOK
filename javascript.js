

function Drink(drink){
	this.drink = drink;
}

/// not Drink.getDrink - got to use prototype
Drink.prototype.getDrink = function(){
	return this.drink;
}

var coke = new Drink("coke");


console.log(coke.getDrink());  //coke --- accessible on the coke instance
console.log(coke);  

console.log(coke.constructor);  ///points to Drink

console.log(coke.prototype);   //undefined..didn;t add shit here


console.log(Drink.prototype.isPrototypeOf(coke));  ////true -- very imp 

console.log(Drink.prototype.isPrototypeOf(new Drink));  ////true 

cokeProto = Object.getPrototypeOf(coke);

console.log(Drink.prototype === cokeProto);   //true

console.log(Drink.prototype === Drink);  //false

console.log(Drink.constructor);  //native function shit


////since coke is an instance of Drink, and if you messup Drink prototype like an object shit --- it messes up Drink prorotype...when you do coke.constructor --- it does not point to Drink --- it points to Object instead -- very important 
//lets see///  

function Dri (dri){
	this.dri = dri;
}

Dri.prototype = {

	getDri : function(){
		return this.dri;
	}
}

var pepsi = new Dri("pepsi");


console.log(pepsi.getDri());   //pepsi 
console.log(pepsi.constructor);  ///see the fucking difference...points to Object shit... instead of Dri from where it got inherited...because you messed up prototype object 

console.log(pepsi.constructor === Object);  //true 








