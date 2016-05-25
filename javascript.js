function Drink(drink){
    this.drink = drink;

}

Drink.prototype.getDrink = function(){
    return this.drink;
}


var coke = new Drink("coke");

console.log(coke.constructor === Drink)  //true

console.log(Drink.prototype.isPrototypeOf(coke))  ////true


console.log(Drink.prototype.isPrototypeOf(new Drink)) //true



console.log(Drink.constructor)  //some native shit

