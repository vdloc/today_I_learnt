# Number



- **Square calculation**

  ```python
  print(2 ** 3) # 8
  ```

- **Floor division**

  This operation will **divide** two numbers and return a result **without any remainders**.

  ```python
  print(10 // 3) # 3
  print(15 // 7) # 2
  ```
  
- **Operation with float number**
  Any operations with ***float*** numbers will  return ***float*** number regardless what’re type of the remaining values.
  
  ```python
  print(1.2 * 2) # 2.4
  print(1.5 * 2) # 3.0 not 3
  ```
  
- **Number presentation with underscore**
  With a quite big number, we can use ***underscore*** to grouping digits for **better number recognition**.
  Python will **completely ignore** those ***underscore*** when **storing** these numbers
  
  ```python
  bad_big_number = 100000000000      # very hard to see there're how many zero digits
  good_big_number = 100_000_000_000  # easy to count the zero digits
  ```
  
- **Constant**
  Python **don’t have built-in** constant type but for convention, we use all ***capital letters*** to naming them.

  ```python
  MAX_CONNECTION = 100
  ALIEN_TYPE = "Alien"
  ```

  

