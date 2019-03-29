1. We can understand this concept like: In every files in our project, if a file depends on another, we can call it a _dependency_  :
   - A index.html includes reference to  index.js so index.js is a dependency  of index.html
   - A main.css file  includes references to foo.ttf font file and bar.png image,. so they are he dependency of main.css
2. So webpack starts from entry point and recursively builds a dependency graph.