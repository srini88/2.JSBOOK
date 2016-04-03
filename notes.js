before all classes like c++ and java 
js dont use classes 

oo characteristics : 

Encapsulation Data can be grouped together with functionality
that operates on that data. This, quite simply, is the definition of
an object.

Aggregation One object can reference another object.

Inheritance A newly created object has the same characteristics
as another object without explicitly duplicating its functionality.

Polymorphism One interface may be implemented by multiple
objects.


JS has all these characteristics - even though without classes 
different way of implementation using dot notation 

Many object-oriented languages use dot notation to access properties
and methods on objects, and JavaScript is syntactically the same. But in
JavaScript, you never need to write a class definition, import a package,
or include a header file. You just start coding with the data types that you want, and you can group those together in any number of ways. You could
certainly write JavaScript in a procedural way, but its true power emerges
when you take advantage of its object-oriented nature. That’s what this
book is about


JavaScript’s weakly typed nature allows
you to write less code to accomplish the same tasks as other languages.

JS is weakly typed 

just start coding without planning any classes ---- full ad hoc type javascript 

forgot method - add that shit later 

JS is not class based inheritance - it is prototype based inheritance and constructor functions that behave similarly 


JS lacks classess - because of it it also lacks class groupings 

everything in JS is an object or accessed through an object 

even functions are represented as objects in JS , which makes them first class functions 

Working with and understanding objects is key to understanding JavaScript
as a whole. You can create objects at any time and add or remove
properties from them whenever you want. In addition, JavaScript
objects
are extremely flexible and have capabilities that create unique and interesting
patterns that are simply not possible in other languages.

primitive and reference

primitive - stored as simple data types 
reference - stored as objects which are really just references to locations in memory 

While other programming languages distinguish between primitive
and reference types by storing primitives on the stack and references in
the heap, JavaScript does away with this concept completely: It tracks
variables for a particular scope with a variable object. Primitive values are
stored directly on the variable object, while reference values are placed as
a pointer in the variable object, which serves as a reference to a location
in memory where the object is stored


5 primitive types in JS 


Boolean true or false

Number Any integer or floating-point numeric value

String A character or sequence of characters delimited
by either single or double quotes (JavaScript has no
separate character type)

Null A primitive type that has only one value, null

Undefined A primitive type that has only one value, undefined
(undefined is the value assigned to a variable that is not
initialized)

console.log(a);   //Uncaught ReferenceError: a is not defined


in js a variable holding primitive type directly contains the primitive value (rather than a pointer to an object)

when you assign primitive value - the value is copied to whatever variable 

if you set one variable to another each variable gets its own copy of the data 



you identify primitive types by means of typeof operator 
- it returns a string indicating the type of data 





PRIMITIVE METHODS - null and undefined have no methods 
- strings have ton of methods 


reference types represent objects in JS 
- closest to classes 

object is an unordered list of properties consists of a nem and a value 

IN js object properties may contain a function that can be executed 

JS objects are nothing more than a hash table 
couple of ways to create or instantiate objects 


1) new operator with a constructor 


(A constructor
is simply a function that uses new
to create an object—any function can be a constructor.)

constructors in JavaScript begin with a capital letter to distinguish them from nonconstructor functions. For
example, this code instantiates a generic object and stores a reference
to it in object:
var object = new Object();


Dereferencing Objects
JavaScript is a garbage-collected language, so you don’t really need to
worry about memory allocations when you use reference types. However,
it’s best to dereference objects that you no longer need so that the garbage
collector can free up that memory. The best way to do this is to set the
object variable to null.

var object1 = new Object();
// do something
object1 = null; // dereference   - remmeber this imp


You’ve seen how to create and interact with generic objects created with
new Object().


 The Object type is just one of a handful of built-in reference
types that JavaScript provides.

other types include 


Array An ordered list of numerically indexed values
Date A date and time
Error A runtime error (there are also several more specific
error subtypes)
Function A function
Object A generic object
RegExp A regular expression


2) seciond way is to use a literal form 


A literal is syntax that
allows you to define a reference value without explicitly creating an object,
using the new operator and the object’s constructor. (Earlier in this chapter,
you saw examples of primitive literals including string literals,
numeric
literals, Boolean literals, the null literal, and the undefined literal.)




While JavaScript doesn’t have classes, it does have types. Each variable
or piece of data is associated with a specific primitive or reference type.
The five primitive types (strings, numbers, Booleans, null, and undefined)
represent simple values stored directly in the variable object for a given
context. You can use typeof to identify primitive types with the exception
of null, which must be compared directly against the special value null.
Reference types are the closest thing to classes in JavaScript, and
objects are instances of reference types. You can create new objects
using the new operator or a reference literal. You access properties and
methods primarily using dot notation, but you can also use bracket notation.
Functions are objects in JavaScript, and you can identify them with
the typeof operator. You should use instanceof with a constructor to identify
objects of any other reference type.



