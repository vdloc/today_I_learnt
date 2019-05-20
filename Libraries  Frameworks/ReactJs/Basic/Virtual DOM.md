React Virtual DOM has some characteristics:

- It’s an object that acts like a copy of real DOM object.
- It can’t render elements by itself.
- once Virtual DOM has changed, then React compares the changed Virtual DOM with pre-changed Virtual DOM (or previous snapshot), then it will figure out exactly things  have really changed then update those things in real DOM.
- 