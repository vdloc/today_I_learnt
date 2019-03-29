# Basic Usage

- First we need source :

  ```handlebars
  var source =
  "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
               "{{kids.length}} kids:</p>" +
               "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
  ```

  and create template by

  ```js
  var template = Handlebars.compile(source);
  ```

  and it needs a JSON object too :

  ```js
  var data = { "name": "Alan", "hometown": "Somewhere, TX",
               "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
  ```

  and result :

  ```js
  var result  = template(data);
  ```

  ```html
  <p>Hello, my name is Alan. I am from Somewhere, TX. I have 2 kids:</p>
   <ul>
     <li>Jimmy is 12</li>
     <li>Sally is 4</li>
   </ul>
  ```

  