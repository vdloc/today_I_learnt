- When we use  the destructuring  to declare variables we must give it a initializer

  ```js
  const {foo, bar} = {foo: 1, bar: 2} // fine
  const {foo, bar} // error
  let {foo, bar} // error
  var  {foo, bar} // error
  ```

- We can use destructuring in an assignment expression like this:

  ```js
  const obj = {
    foo: 1,
    bar: 2
  }
  {foo, bar} = obj // syntax error
  //but
  ({foo, bar} = obj) // is fine
  foo // 1
  bar // 2
  ```

  and we can use this assignment in everywhere that it can be calculated:

  ```js
  const obj = { foo: 2, bar: 3};
  console.log({foo, bar} = obj)
  foo // 2
  bar // 3
  ```

- We can add addition values to the destructuring assignment as default values:

  ```js
  const obj = {foo: 3, bar: 'foo'};
  ({foo, bar, cat = 'dog'} = obj);
  foo // 3
  bar // 'foo'
  cat // 'dog'
  ```

- Go further, we can combine  two new ES6 features are destructuring and computed property names like :

  ```js
  const obj = {
    foo: {
      cat: 'dog'
    },
    dog: {
      foo: 'cat'
    }
  }
  const  {
    foo: {
      cat: dogName
    },
    [dogName] {
    	foo: dog
  	}
  }
  console.log(dog) // cat
  ```

  

