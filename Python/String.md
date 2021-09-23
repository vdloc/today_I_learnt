# STRING



- ##### Transform case
    
    **str.title()**: Capitalize first character in a word for every word in string.
    
    ```python
    str = "hello world"
    print(str.title()) # Hello World
    ```
    
    **str.upper()**: Convert all characters to uppercase.
    
    ```python
    str = "hello world"
    print(str.upper()) # HELLO WORLD
    ```
    
    **str.lower()**: Convert all characters to lowercase. Useful when compare two or many strings.
    
    ```python
    str = "Hello World"
    print(str.lower()) # hello world
    ```
    
- ##### Strip whitespaces from string
  
  **str.strip()**, **str.rstrip**, **str.lstrip()**: remove ***whitespace*** characters from **both** left and right sides or just **single** side ( right or left side ):
  
  ```python
  str = "\n\t Hello World \n\t"
  print(str.strip()) #"Hello World"
  print(str.lstrip()) #"Hello World \n\t"
  print(str.rstrip()) #"\n\t Hello World"
  ```
  
- ##### Compose string with values
  
  We can send a variable to string by two way:
  
  ```python
  foo = 'Foo'
  sentence =  f'Are you nuts,{foo} ?
  print(sentence) # Are you nuts,Loc ?
  anotherSentence = 'Are you nuts,{} ?'
  print(anotherSentence.format(foo)) # Are you nuts,Loc ?
  ```
  
  We can add many value to the format parameter like :
  
  ```python
  sentence = '{} {} {}'
  print(sentence.format("Are", "you", "nuts?"))
  ```
  
- ##### Multiply string
  
  If we want to multiply string:
  
  ```python
  str = 'foo' * 3 # foofoofoo	
  ```
  
- ##### Multiline string
  
  Use triple double quotes to make multiline string
  
  ```python
  """
  HoHo
  HeHe
  HiHi
  """
  ```
  
- ##### Concatenate two strings
  
  We can concatenate two strings by using plus character:
  
  ```python
  first = 'Foo '
  second = 'Bar'
  print(first + second) # Foo Bar
  ```

