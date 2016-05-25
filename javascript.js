var animal = {
    eats :true
}

var rabbit = {
    jumps :true
}


rabbit = Object.create(animal);


console.log(rabbit.eats)  //true

console.log(Object.getPrototypeOf(rabbit));
console.log(Object.getPrototypeOf(rabbit) ===animal) //true

console.log(animal.isPrototypeOf(rabbit))  //true

