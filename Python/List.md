# List



### Modify a List

- **Insert item to end**
  We use **append()** method:

  ```python
  colors = ["blue", "green"]
  colors.append("red")
  print(colors) # ["blue", "green", "red"]
  ```

  

- **Insert item to specified position**
  We use **insert()** method with arguments are target ***index*** and the inserting ***value***

  ```python
  colors = ["blue", "green", "red"]
  colors.insert(2, "white")
  print(colors) # ["blue", "green", "white", "red"]
  ```

  

- **Remove item by index**

  - **Just remove only**
    If we just want to remove an item from the list, we can use **del **statement with target ***index*** for deletion:

    ```python
    colors = ["blue", "green", "white", "red"]
    del color[1]
    print(colors) # ["blue", "white", "red"]
    ```

    

  - **Remove and use that removed items**

    - If we want to grasp a item right **after** we remove it from the list, we can use **pop()** method with target **index** of removing item. 

    - If there is **no target index** argument, **pop()** method will remove and return **last** item of the list.

      ```python
      colors = ["blue", "green", "white", "red"]
      
      removed_color = colors.pop(2)
      print(colors) # ["blue", "green", "red"]
      print(removed_color) # white
      
      removed_color = color.pop()
      print(colors) # ["blue", "green"]
      print(removed_color) # red
      ```
      
      
  
- **Remove item by value**
  To remove any item in the list with specified **value**, we use ***“remove”*** method. This method will **only** remove the **first occurrence** of the specified value in the list. So if you want to remove entire occurrences, we need do this in a loop.
  
  ```python
  colors = ["blue", "green", "white", "red", "green", "red"]
  
  colors.remove("green") # only first green color be removed.
  print(colors) ["blue", "white", "red", "green", "red"]
  
  while "red" in colors:
      colors.remove("red")
      
  print(colors) ["blue", "white", "green"]
  ```
  
  


------

### Organizing a List

- **Permanent actions**

  - **Sort**
    To permanent **sort**  a list, we use **sort()** method . We can give  **sort()**  method the ***reverse*** flag **argument** to make the list will be sorted but in the **reversed** order. 

    ```python
    colors = ["blue", "white", "green", "red"]
    colors.sort()
    print(colors) # ['blue', 'green', 'red', 'white']
    ```

    

  - **Reverse order**

    To  permanent **reverse** order of a list, we use **reverse()** method

    ```python
    colors = ['blue', 'green', 'red', 'white']
    colors.reverse()
    print(colors) # ['white', 'red', 'green', 'blue']
    ```
    
    

- **Temporary actions**

  - **Sort**
    To get a **sorted copy** of a list , we use **sorted()** function and as the permanent sort, we can use the ***reverse*** flag to receive a sorted list in **reversed** order.

    ````python
    colors = ["blue", "white", "green", "red"]
    sorted_colors = sorted(colors)
    
    print(sorted_colors) # ['blue', 'green', 'red', 'white']
    print(colors) # ["blue", "white", "green", "red"]
    ````

  - **Iterate with order reversed**

    To loop through a list in reversed order, we can use **reversed()** function to get a reversed **iterator**

    ```python
    colors = ["blue", "white", "green", "red"]
    
    for color in reversed(colors):
        print color
    # red
    # green
    # white
    # blue
    print(colors) # ["blue", "white", "green", "red"]
    ```
    
    
------

### List indexes accessing

- With **negative** index: 

  - If the index is **in** list indexes range, it counts from last to first item or from most right to most left item with start index is **-1**.

    ```python
    # length of colors list is 5
    colors = ["red", "blue", "yellow", "green", "brown"]
    #	indexs:	-5		-4		-3		  -2		-1
    blue = colors[-4]
    print(blue) # blue
    ```

  - To access **last** item in a list, we can  point to **-1** index:

    ```python
    last_color = colors[-1]
    print(last_color) # brown
    ```

  - If the index is **out of range**, interpreter will throw the **IndexError**.

    ```python
    dont_exist_color = colors[-6] # IndexError
    ```

- With **positive** index, just like normal language's index counting rule and if the index is **out of range**, it also throw **IndexError**.

- We can use values evaluation inside the brackets to calculate the accessing index:

  ```python
  second_color = colors[4 / 2]
  print(second_color) # blu
  ```

  

