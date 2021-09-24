# How to skip  arguments in function call

1. We can skip some arguments when call a function by give these ignored arguments the __undefined__ value

   ```js
   function foo (cat = 1, dog = 2) {
     return {
       cat, dog
     }
   }
   Foo(undefined, 12); // { cat : 1, dog : 12}
   ```

   