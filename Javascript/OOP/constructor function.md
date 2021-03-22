In ES5:

We can create the blue print for every object instance with `constructor function`

```js
function Foo (arg1, arg2) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    
    this.foo = function () {
        console.log(`I received those ${arg1} and ${arg2}`);
    }
}
```

When we create a new object instance with the above `blueprint` , `arg1`, `arg2` and the `foo` method will be the object own properties. 

**For each instance, those properties will be totally different among them.**

If we want to create some common properties that will be shared among the instances, we can add those properties to function `prototype` object.

```js
function Foo () { 
  	this.foo = {};
    this.arg1 = 2;
    this.arg2 = 3;
}

Foo.prototype.sum = function () {
returnt this.arg1 + this.arg2;
}

let foo1 = new Foo();
let foo2 = new Foo();

console.log(foo1.foo === foo2.foo) // false
console.log(foo1.sum  === foo2.sum) // true
foo1.sum() // 5
foo2.arg1 = 3;
foo2.sum() // 6
```

Although every Foo instances will share the sum method but the `this` pointer will be pointing to each instance object.

**Conclude:**

The properties in the constructor function will be created total fresh and deferent with each instance. 

The properties in the prototype object will be created once and be shared among all instances.



