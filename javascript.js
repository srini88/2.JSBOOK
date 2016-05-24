////JUST SHALLOW COPY>..


// With jQuery, you can shallow copy with:

// var copiedObject = jQuery.extend({}, originalObject)
// subsequent changes to the copiedObject will not affect the originalObject, and vice versa. - very imp



var obj = {
	a: 1,
	b:2
}
function shallowCopy(oldObj) {
    var newObj = {};
    for(var i in oldObj) {
        if(oldObj.hasOwnProperty(i)) {
            newObj[i] = oldObj[i];
        }
    }
    return newObj;
}

var newObj = shallowCopy(obj);



newObj.a=2;
console.log(newObj)  /// a:2, b:2
console.log(obj)  //still old shit//// a:1, b:2  ///one more level deep..it will be a problem...obj and newObj point to the same shit..


// Shallow copy keeps references to original objects, arrays or functions within the new object, so the "copy" is still linked to the original object. In other words, they will be pointing to the same memory location.
var newObj = $.extend({}, oldObj);