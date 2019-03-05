# Default parameters

1. We can use the previous parameters as the default for a later parameter:

   ```javascript
   function foo(cat, dog = cat) {
     return cat.concat(dog);
   }
   foo('mew') // mewmew
   ```

2. We can also use a function call as the default parameter:

   ```javascript
   function foo(a, b = a) {
     return a + b;
   }
   function bar(a, b = foo(a)){
     return a + b;
   }
   bar(1) // 3
   bar(1, 2) // 3
   ```

3. We mustn’t use the following parameter as the default parameter for the previous one:

   ```javascript
   function foo(cat = dog, dog) {
     return cat.concat(dog);
   }
   foo('mew', 'mew') // mewmew
   foo(undefined, 'mew') // throw error
   ```

   because the code above and be explained like this:

   ```javascript
   let cat = dog; // because dog hasn't been initialized yet
   // so just like 'let' or 'const' TDZ, they can't be accessed.
   let dog = 'mew';
   ```

   

   