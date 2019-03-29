# Arrow function

1. If we want to return a single object within an arrow function, we can use:

   ```javascript
   const foo = (prop = 'foo',val = 'bar') => (
     {
       [prop] : val
     }
   )
   ```

2. Arrow function doesn’t have these following things inside itself

   - `this`, `super`, `arguments`, `new.target`
   - can’t be called with `new` keyword
   - `Prototype` 

   Because arrow function __can’t__ be used as a constructor function.

3. The `this` value of an arrow function __can’t__  be changed throughout the entire life cycle of itself.

4. this`, `super` value inside the arrow function are those values in the outer scope, the arrow function just only uses it, not create these values for itself..

5. When we use `call, bind, apply`  with arrow functions, we should assign the `this` value to `null` because any `this` values, we give to it is not effective.
