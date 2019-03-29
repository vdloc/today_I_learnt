Curry JS

1. ```javascript
   function max (...numbers) {
     return Math.max(...numbers);
   }
   function curry(fn) {
     let l = fn.length;
     return arg => {
       let args = [...arguments];
       if(args.length >= l {
          return fn.apply(null, args;
          }
       else {
         return arg => {
           let args = [...arguments];
           return 
         }
       }
     }
   }
   ```

2. 