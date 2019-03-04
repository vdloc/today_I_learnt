# Computed Property

1. We can access the properties of an object through the way is compute those properties by a binding or an expression:

   ```javascript
   const foo = 'bar';
   const obj = {
     bar : 1,
     string: 'foo'
   }
   obj[foo] // 1
   obj['str'+ 'ing'] = 'foo';
   ```

   