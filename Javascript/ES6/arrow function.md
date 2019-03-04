# Arrow function

1. If we want a single object within an arrow function, we can use:

   ```javascript
   const foo = (prop = 'foo',val = 'bar') => (
     {
       [prop] : val
     }
   )
   ```

   

   