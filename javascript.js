var book = Object.create(Object.prototype, {
	title :{
		value :"JS",
		writable:true,
		enumerable :true,
		configurable :true
	}
})

console.log(book)
console.log(Object.prototype.isPrototypeOf(book))  //true