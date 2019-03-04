# Substring

1. We can use these methods to identify substrings in a string:

   - __includes()__ : return __true__ when a substring is found anywhere in string and return __false__ if not.
   - __startsWith__  : return __true__ if a substring is in the beginning of a string and return __false__ if not.
   - __endsWith__ : just like the __startsWith__ but for the ending of the string.

   Each method above support two arguments, the first is the substring we need to identify and the second is the index which method start to search.For the __includes__ and __startsWith__, the index is where the method start searching but with __endsWith__ , the method will search from the  string length minus the index.

   ```javascript
   const text = "Hello Foo Bar ";
   text.length // 12
   text.includes("Foo") //true
   text.includes("Foo", 10) //false
   text.startsWith("Hell") // true
   text.startsWith("Hell", 1) // false
   text.endsWith(" ") // true
   text.endsWith("Bar", 13) // true -  match from the 13 index to the beginning
   ```

2. But those methods above doesn’t support the regular expression as the argument( throw an error) and just can return Boolean.

3. For find out the index of match substring, we have to use __indexOf__ and __lastIndexOf__ methods,  ~~and they will convert the regular expression in argument to string and search for these patterns.~~

4. Beware  when we use __indexOf__ method,  when we don’t serve it with an argument, so the value for searching is coerced to “undefined” string and it will be the searching string

   ```javascript
   const str = "undefined sugar";
   str.indexOf() // 0
   ```

   



