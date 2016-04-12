function D(drink) {
	this.drink = drink;
};


D.prototype = {
	getDrink: function(){
		return this.drink;
	}
};

var d = new D("coke");

console.log(d.getDrink());  //coke


console.log(d.constructor === D);  //false
console.log(d.constructor === Object);  //true === pointing to Object insted -- constructor property is overridded