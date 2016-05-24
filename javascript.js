// Shallow copy vs deep copy

// A shallow copy will clone the top-level object, but nested object are shared between the original and the clone. That's it: an object reference is copied, not cloned. So if the original object contains nested object, then the clone will not be a distinct entity.

// A deep copy will recursively clone every objects it encounters. The clone and the original object will not share anything, so the clone will be a fully distinct entity.

// Shallow copies are faster than deep copies.

// When it is ok to share some data, you may use shallow copy. There are even use case where it is the best way to do the job. But whenever you need to clone a deep and complex data structure, a tree, you will have to perform deep copy. Have in mind that on really big tree, it can be an expensive operation.


var obj = {
	a: 1,
	b:2
}
// function shallowCopy(oldObj) {
//     var newObj = {};
//     for(var i in oldObj) {
//         if(oldObj.hasOwnProperty(i)) {
//             newObj[i] = oldObj[i];
//         }
//     }
//     return newObj;
// }

// var newObj = shallowCopy(obj);

var newObj = obj   //this is shit..changin newObj changes obj..not even a shallow copy..

newObj.a=2;
console.log(newObj)

console.log(obj)

