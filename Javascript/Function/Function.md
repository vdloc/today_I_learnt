# Function

1. We can know to numbers of the arguments that a function require through its length property

   ```javascript
   let foo = (a,b)=>a+b;
   console.log(foo.length);
   //2
   ```

2. And we can know the function name too:

   ```javascript
   function foo() {
     return 'foo';
   }
   let bar = function () {
     return 'bar';
   }
   console.log(foo.name); // 'foo'
   console.log(foo.bar);  // 'bar'
   ```

   And in ES6, all functions have name property

3. In ES5 and earlier, function when used with `new` keyword, the `this` value inside that function will be a new `Object` and is returned

   ```javascript
   function Animal(type) {
     this.type = type;
   }
   let cat = new Animal('cat');
   let foo = Animal('dog');
   console.log(cat) // Object
   console.log(foo) // undefined
   ```

   but if the function is called without `new` keyword, it’s just return the value as normal

4. Only functions have internal only [[Construct]] method and be called with `new` and the arrow functions doesn’t have it.

5. All function have internal only [[Call]] method and when the functions are called without `new` keyword, this method will be used.

6. In the past, when we want to check to ensure that the object is created by calling the constructor with the `new` keyword, we use :

   ```javascript
   function Animal(type) {
     if(this instanceof Animal) {
       this.type = type;
     } else {
       throw new Error("You must use the new keyword");
     }
   }
   let cat = new Animal('cat');
   let dog = Animal('dog') // throw error
   
   ```

   but now with ES6, we have a new “metaproperty” `new.target`. If [[Construct]]  is called, the new.target is the function constructor but if [[Call]] is  called, the `new.target` is `undefined` and the way `new.target` checks is more properly.

   ```javascript
   function Animal(type) {
       if (typeof new.target !== "undefined") {
           this.type = type;
           console.log(new.target);
       } else {
           throw new Error("You must use new keyword!");
       }
   }
   let cat = new Animal('cat'); //[Function Animal]
   let dog = Animal('dog'); // throw error
   ```

7. In ES6, we can declare a function in a block level, that will throw error in ES5:

   ```javascript
   if(foo) {
     typeof bar; // 'function'
     function bar(){
       
     }
   }
   typeof bar; // undefined
   ```

   