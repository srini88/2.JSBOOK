///questions

function Person(){}
bill = new Person();
ted = new Person();

console.log(bill.prototype===ted.prototype);
>> Returns true

console.log(Person.prototype===bill.prototype);
>> Returns false



bill doesn't have a property 'prototype' so bill.prototype is undefined, so undefined === undefined is true


What you really want to test is

console.log(Person.prototype == bill.__proto__).

That is, the 'real' prototype of bill is equal to the function prototype of its constructor, when new is used, at least.

It's quite unfortunate that the term prototype is used in these two ways, but if you remember that function prototype and object prototype (__proto__) are different that goes a long way toward clarifying things.