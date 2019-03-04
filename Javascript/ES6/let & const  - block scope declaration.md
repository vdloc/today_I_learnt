# Let

1. Block scope :

   - Inside a function
   - inside a block (between { } pair )

2. Not being **_hoisted_** (declare at top).

   - So it’s best practice when we declare at the very first of a block so the variable is available to the entire block.

   ```javascript
   function foo(bar) {
     let animal = 'cow';
     if(bar > 10) {    
       console.log('We need less %s', animal)
     }else {
       console.log('We need more %s', animal)
     }
   }
   ```

   not like this

   ```javascript
   function foo(bar) {  
     if(bar > 10) {    
       let animal = 'cow';
       console.log('We need less %s', animal)
     }else {
       console.log('We need more %s', animal) //undefined error
     }
   }
   ```

3. If we redeclare a variable with the  same name as a variable that was declared before in the scope , an error will be throw:

   ```javascript
   function block(){
     var foo = 10;
     let foo;
   }// throw error
   ```

   but it’s ok when the variable was declared by **let** is same as the name of an variable that was declared before but in a different scope with it.

   ```javascript
   function block(){
     let foo = 10;
     if(1 > 2) {
       let foo  = 1;
     }
   }
   ```


# Const

1. Block scope and doesn’t be hoisted  and declaration rules like **let** above.

2. Cannot “change” the binding and reassign and must be initialized on declaration

   ```javascript
   const foo; // is not allowed
   const bar  = 10;
   bar = 20: // is not allowed
   ```

3. if the value of the binding is an object, we can change it but can’t reassign an other value for it.

   ```javascript
   const foo = {
     whhoo: 10
   }
   foo.whhoo = 'lost star'; //it's ok
   foo = {
     whhoo: 'lost star'
   } // it's not
   ```

   

# Temporal Dead Zone - TDZ

1. Temporal Dead Zone is a zone for store the variables which created by **let** or **const**  when Javascript engine parses the code.

   In a block, Javascript find out the variable ‘s declarations and determine if the variables were created by “var” so it hoists that variable to the top of the block but if the variables were created by **let** or **const**, it put them in **TDZ** and when we try to access the variables , an error will be throw.

   ```javascript
   function bar () {
   	console.log(typeof foo);//throw error because foo was created but it was being pushed into TDZ so we can't access it before the declaration
     let foo = 10;
   }
   ```

   but when we try to access the binding in a outside scope of a variable which declared  has the same name with the binding, the result is just ‘undefined’;

   ```javascript
   console.log(foo) // undefined because it logs the foo global variable but it's undefined
   function bar () {
     let foo = 10;
   }
   ```

   



- In **for-in** or __for-of__  loop, we can use __const__  to declare iterative variable and don’t need to worry about the loop change the __const__ binding and it work just liek __let__

  ```javascript
  const arr = [1,2,3];
  for(const num of arr) {
  	console.log(num); //1, 2, 3  and no error will be throw
  }
  ```

  because with these loop types, each iteration  the loop initialize a new binding rather than trying to modify the existing binding.

- In global scope, instead create a property in global object - window for example when we use __var__ , when we use __let__ or__const__ , there aren’t global properties be created