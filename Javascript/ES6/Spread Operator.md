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

2. We can use spread operator to create a new array from an iterative object or `concat` two array with efficiently:

   ```javascript
   let m = new Map();
   m.set('foo','bar');
   m.set('bar', 'foo');
   console.log([...m]) //[ [ 'foo', 'bar' ], [ 'bar', 'foo' ] ]
   ```

   ```javascript
   let cat = [1, 2, 3];
   let dog = [4, 5, 6];
   let foo = [...cat, ...dog] // [1, 2, 3, 4, 5, 6]
   ```

   