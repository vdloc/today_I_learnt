Khi muốn gán data vào DOM element, chúng ta có thể dùng thuộc tính data-*

```html
<div 
     id='foo' 
     data-foo='bar' 
     data-john-doe='brilliant'>
    Foo
</div>
```



Để truy xuất vào data được gán trong data-attr ở CSS, ta có thể dùng thuộc tính `content` của `pseudo` element hoặc selector:

```css
.foo[data-foo="bar"] {
    font-size: 2em;
}
```

 ```css
.foo::before{
    content: attr(data-foo)
}
 ```

Với javascript, ta có thể truy xuất thông qua thuộc tính `dataset` của element :

```js
const foo = document.getElementById('foo');
console.log('bar : ', foo.dataset.bar);
console.log('mr john doe is ', foo.dataset.johnDoe)
```

Note: chúng ta sử dụng camelCase để truy xuất vào attribute có chứa dashes(-).

