- In python 3, print method works with parentheses like:

  ```python
  print("Hello World!")
  ```

- We can send a variable to string by two way:

  ```python
  foo = 'Foo'
  sentence =  f'Are you nuts,{foo} ?
  print(sentence) # Are you nuts,Loc ?
  anotherSentence = 'Are you nuts,{} ?'
  print(anotherSentence.format(foo)) # Are you nuts,Loc ?
  ```

- We can add many value to the format parameter like :

  ```python
  sentence = '{} {} {}'
  print(sentence.format("Are", "you", "nuts?"))
  ```

- We can concatenate two strings by using plus character:

  ```python
  first = 'Foo '
  second = 'Bar'
  print(first + second) # Foo Bar
  ```

- In python, to comment a section, we use ‘#’ character on each line we want to comment :

  ```python
  # First 
  print('second')
  # Here is
  # nothing
  ```

- If we want to multiply string:

  ```python
  str = 'foo' * 3 # foofoofoo
  ```

- We can add a value to the end position of returned value from  __print__ method by add an _`end_ ` parameter:

  ```python
  print('Hello ', end='World!')
  ```

  In case of default,  end parameter is new line character, so if we don’t want to have new line, we put `end=‘ ’`

- When we want to create a multiline string:

  ```python
  """HoHo
  HeHe
  HiHi
  """
  ```

  and the quote must be double quotes, not single quote( invalid syntax)

- We can get user input from terminal like:

  ```python
  name = Loc
  age = input(f'What\'s the age of the men named {name}') 
  # What's the age of the men named Loc
  ```

- In python we can unpack the values from an object like destructuring in ES6

  ```python
  foo = [1, 2, 3]
  first, second, third = foo
  print(second) # 2
  ```

- We can use a prompt mark in every input action by :

  ```python
  prompt = '>'
  input(prompt)
  # >....
  ```

- We can read the file content by `open` and `read` method:

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

  