## 	Some interesting things about Symbol 

1. Symbol can’t be used as a constructor like ~~new Symbol()~~ .

2. Every Symbol function return value is unique.

   ```javascript
   Symbol('bar') === Symbol('bar')
   //false
   ```

3. The most popular purpose of Symbol values are to be used as an identifier for object properties

   ```javascript
   const obj = {};
   let length = 1;
   obj[Symbol(length)] = 1;
   obj[Symbol(length)] = 2;
   console.log(obj)
   /* obj {
   *	Symbol(1) : 1,
   *	Symbol(1) : 2
   *}
   */
   ```

4. The value which has passed to Symbol() function is just a description for debugging purpose :laughing: like 

   ```java
   let sym = Symbol.for('cat')
   sym.toString();// 'Symbol(cat)'
   ```

   

5. To create a universal Symbol which can be access by every files, we must use Symbol.for() and Symbol.keyFor() methods

   ```javascript
   let loc = Symbol.for('loc');// it will search the entire symbols registry(entire symbols) for a symbol which created with the given key.If it not found so it create a new global symbol 
   let foo = Symbol.for('foo');
   Symbol.keyFor(foo) // foo
   let bar = Symbol('bar');
   Symbol.keyFor(bar) // undefined - this symbol is local symbol when keyFor method search for global symbols
   ```

6. When we assign many symbol as properties of an object,when we want get the object values which correspond  with these symbol properties, we can use Object.getOwnPropertySymbols() method like

   ```javascript
   const obj = {};
   const a = Symbol('a');
   const b = Symbol.for('b');
   obj[a] = 'local';
   obj[b] = 'global';
   Object.getOwnPropertySymbols(obj) // [Symbol('a'), Symbol('b')];
   ```

   