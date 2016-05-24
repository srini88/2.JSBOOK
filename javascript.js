var mortal = {
	name :"Im a mortal"
}
var human = Object.create(mortal);


console.log(Object.getPrototypeOf(human) === mortal)

console.log(mortal.prototype === Object.getPrototypeOf(human))
console.log(mortal.isPrototypeOf(human))





// human.name = "Im a human";
// console.log(human.name)
// var badhuman = Object.create(human);
// console.log(badhuman)

