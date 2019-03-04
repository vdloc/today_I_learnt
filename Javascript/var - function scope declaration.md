# Var

1. When we declare a variable with **`var`**  keyword, this variable is treated as they’re on the top of the scope(function scope or global scope if the declaration occurs outside of the function)  regardless of where the actual declaration occurs.

   ```javascript
   function foo(){
     console.log('We need %s', bar); 
     // We need undefined
     // function doesn't throw a undefined error
     var bar = 'bar';
   }
   ```

   the above codes is same as :

   ```javascript
   function foo(){
     var bar; // undefined
     console.log('We need %s', bar); 
     // We need undefined
     // function doesn't throw a undefined error
     bar = 'bar';
   }
   ```

   and it’s also called **_hoisted_**

2. **function scope**  is the scope inside a function .