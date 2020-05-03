Normally, the grid children which are granted with keyword `auto` will take as much space as possible but when in the grid container has specified `fr` keyword so the `fr` keyword will take overwhelming the space and the `auto` will take at least space as possible

Currently, we can't use the `fr` keyword inside `minmax` function

We can use the function `fit-content` to get the same behavior of

```css
.grid-container {
  grid-template-columns: minmax(min-content, 100px);
}
```

```css
.grid-container {
  grid-template-columns: fit-content(300px);
}
```

Those functions will make the child item to fit the content when it's content length smaller than the input value but if the child's content length wider than the input value, it will limit the length of the child by the input value.

The keywords `fr` and `auto` still can't be used with the `fit-content` function
