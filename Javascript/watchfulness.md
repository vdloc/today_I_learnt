- When we want to manipulate a DOM Collection, be careful when loop through its children and append some new elements to it.May be we want create a copy of it by simple spread operator because this unintended action may lead to a infinite loop when we increase DOM collection length.

  ```javascript
  let childs = [...node.children];
  // do things with childs rather than node.children itself.
  ```

  