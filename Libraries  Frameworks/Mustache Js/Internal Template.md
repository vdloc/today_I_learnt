- We can include the template inside the static HTML 

  ```html
  <!DOCTYPE HTML>
  <html>
  <body onload="loadUser()">
  <div id="target">Loading...</div>
  <script id="template" type="x-tmpl-mustache">
  Hello {{ name }}!
  </script>
  </body>
  </html>
  ```

  and script :

  ```javascript
  function loadUser() {
    var template = $('#template').html();
    Mustache.parse(template);   // optional, speeds up future uses
    var rendered = Mustache.render(template, {name: "Luke"});
    $('#target').html(rendered);
  }
  ```

  