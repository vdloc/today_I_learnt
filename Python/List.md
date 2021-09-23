# List



##### List indexes

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

  

