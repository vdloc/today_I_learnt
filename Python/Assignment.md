# Variable Assignment

- ##### Unpack the values
  
  In python we can unpack the values from an object like destructuring in ES6
  
  ```python
  foo = [1, 2, 3]
  first, second, third = foo
  print(second) # 2
  ```
  
- ##### Mutiple assignment

  We can assign multiple values to multiple variables in a single line:

  ```python
  a, b, c = 1, 2, 3
  print(a)  # 1
  print(b) # 2
  print(c) # 3
  ```

- **Naming conventions**

  - Variable names can contain only ***letters***, ***numbers***, and ***underscores***.

  - They can start with a ***letter*** or an ***underscore***, but **not** with a ***number***.

    ```python
    good_one_123 = 123 # good variable name
    3ad_one_321 = 321 # bad varialbe name
    ```

  - ***Spaces*** are **not allowed** in variable names, but ***underscores*** can be used
    to separate words in variable names.

    ```python
    your name = "John" # error
    your_name = "Doe" # good
    ```

  - Variable names should be **short** but **descriptive**. For example, “***name*** ”is
    better than “***n***”, ***“student_name”*** is better than “***s_n***”, and ***“name_length”*** is better
    than ***“length_of_persons_name”***.

  - Be careful when using the **lowercase** letter ***“l”*** and the **uppercase** letter ***“O”***
    because they could be confused with the numbers ***“1”*** and ***“0”***.

