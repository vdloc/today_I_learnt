# Precompiler

We can use precompiler to save time on the client and reduce size of library.

This will be very necessary when we work on mobile platform.

1. We need install handlebars in global context :

   ```bash
   npm i handlebars -g
   ```

2. For example we have the `book.handlebars` file like this :

   ```handlebars
   <ul>
     {{#books}}
       <li>{{title}}</li>
     {{/books}}
   </ul>
   ```

3. We run :

   ```bash
   handlebars book.handlebars -f template.js
   ```

   to have a output `template.js` file.

4. We can just insert the runtine file and don’t need to include the whole library:

   ```html
   <script src= "handlebars.runtime.js"></script>
   <script src= "template.js"></script>
   ```

5. And the compiled template will be existed in `Handlebars.templates` object and we can use it by call it by :

   ```js
   let template = Handlebars.templates.book
   ```

6. We can compile many template files into one compiled js file by:

   ```handlebars
   handlebars foo.handlebars bar.handlebars ... -f template.js
   ```

   and those template will be appeared in  `Handlebars.templates` object

7. We can additionally use `-m` flag to minify the template