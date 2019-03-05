# Spread Operator

1. Before the spread operator, we normally use the `apply` method in `Function.prototype` like this:

   ```javascript
   const numbers = [10, 20, 30, 40, 50];// math.min will only accepts the separated arguments
   let min = Math.min.apply(Math, numbers) // because the apply method will takes an array of arguments and apply it as seperate argument to the function not like the call method, take the arguments separately
   ```

   But now, with the spread parameter, we can use it like this:

   ```javascript
   const numbers = [10, 20, 30, 40, 50];
   let min = Math.min(...numbers) // spread operator will spread  the items of the array become the separated arguments
   ```

   