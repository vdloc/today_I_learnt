# Object

- When an object property name is the same name as the local variable name, we can simply include the name without a colon and a value:

  ```js
  function foo ()  {
    let cat = 'dog';
    return {
      cat
    }
  }
  console.log(foo()) // { cat : 'dog'}
  ```

- We have a new method to check if two values are equal - Object.is

  It’s the most accurate method to do this task 

  ```js
  Object.is(5, '5') // false
  +0 === -0 //true
  Object.is(+0, -0) // false
  NaN === NaN // false
  Object.is(NaN, NaN) // true
  ```

- In ES6, we can have many duplicate properties’s name like

  ```js
  const foo = {
    name: 'Cow',
    name: 'Foo'
  }
  console.log(foo.name) // Foo
  ```

- In ES6, we have the object own property enumeration order :

  - All number keys in ascending order.
  - All string or symbol keys in the order in which keys was added first.

