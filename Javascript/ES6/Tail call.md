# Tail Call

- Tail call function is called as the last statement in another function :

  ```js
  function foo() {
    return bar();
  }
  ```

- For function optimization, we must let the call of function after the return :

  and only return function, not adding a expression or binding like

  ```js
  function foo() { //not optimized
    let bar = () => {};
    return bar;
  }
  function foo() { //not optimized
    return 1 - bar();
  }
  //and closure too
  function foo() { // not optimized too
    let name = 1;
    function bar() {
      return name;
    }
  	return bar;
  }
  ```

  