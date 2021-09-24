# Detect Javascript Enable

- We can detect Javascript enable by:

  1. Add class “`no-js`” to the `html` tag

  2. In the `head` tag, we add a script to detect and enable the JS feature:

     ```js
     document.documentElement.className = 'js';
     // this will remove the no-js class on HTML file
     ```

     

