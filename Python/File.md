# FILE 



- ##### Open and read file

  We can read the file content by `open` and `read` method:
  
  ```python
  from sys import argv
  script, fileName = argv
  
  buffer = open(fileName)
  content = buffer.read()
  ```

  The `open` method is like `Open File` function in a editor.

  and `close`  like `Close and Save` 

  `readline` : read only one line

  `truncate` : empty the file

  `write` : write content to the file

  `seek(0)`: move the reader pointer to the beginning position

  if we want to modify the file,we need add a `w` parameter to the `open` method:
  
  ```python
  from sys import argv
  script, fileName = argv
  
  buffer = open(fileName, 'w')
  content = buffer.read()
  buffer.write("Hello")
  buffer.close()
  ```

