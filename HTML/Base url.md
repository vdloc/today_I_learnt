- We can add a base URL for all link reference in the page by :

  ```html
  <base href="http://google.com" target="_self" />
  
  <!-- body -->
  
  <a href-"foo">Foo</a> 
  <!-- Will redirect to google.com/foo -->
  ```

- `base` element should be the first child in the `head` element or come before any `link` element

