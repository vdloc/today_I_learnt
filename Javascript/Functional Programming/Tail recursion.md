# Tail recursion

1. The difference between tail recursion and regular recursion is rather than using the function as an operand like this:

   ```javascript
   function factorial (n) {
     if (n === 1) {
       return 1;
     }
     return n * factorial (n — 1); //function factorial as operand
   }
   ```

   we pass the changing result to the next recursive step like this :

   ```javascript
   function factorial(n) {
     var recur = function (result, n) {
       if (n === 1)
         return result;  
       return recur(result * n, n — 1);
     }
     return recur(1, n);
   }
   ```

   