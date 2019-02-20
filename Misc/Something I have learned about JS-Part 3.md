# Somethings I hace learned about JS - part 3

1. When we say “we can’t use double equation to compare two object ” may be half true.When we compare two variables which they’re both bind to the same one Object so the result is “true” and when we compare two variables which they’re bind to the different objects each one so the result is ‘false’.
Ex: 
``` javascript
let a  = {foo: bar};
let b = a;
a == b // will produce true
let c = {foo: bar};
a == c // will produce false
```
2. When we declare or act some action with an object, if we not give the property a value, we just give it a name like `{foo, bar}` and the value which it was returned from `foo` and `bar` variable will have pushed in the same property name with the variable.

   Ex: 

   ```javascript
   let foo = 10;
   let bar = false;
   let john = {foo,bar};
   console.log(john); //will produce {foo: 10, bar: false}
   ```

3. The ***correlation*** is  a measure of dependence between two variables.It’s often a range from -1 to 1.

   If correlation equal zero so two variables have no relation when It’s one so two variables are  have a great relation, if we know one so we know the other.when the correlation is negative one, so two variable s still have a great relation but it’s opposite, we know one and the opposition of it is the other,

4. The ***rest parameter*** is often an array of all arguments.We can use it and access it through `for of`loop.

   Ex: 

   ```  javascript
   let restParam = (…numbers) {
     for( let number of numbers) {
       console.log(number)
     }
   }
   restParam(foo,bar, 2, 3, 4); // foo, bar , 2, 3, 4;
   ```

   but when I have  an accident mistake of using `in` instead  `of` the loop produce the indexes of numbers in rest parameter  like `1,2,3,4,5`;

5. The ***spread syntax*** for rest parameter which it use by syntax :

   ``` javascript
   let arr = [2,3,5];
   console.log(...arr); // 2, 3, 5
   console.log(1,...arr,6) // 1, 2, 3, 5, 6
   ```


