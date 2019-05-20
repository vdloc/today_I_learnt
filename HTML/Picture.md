We can use `pciture` element to show responsive images:

```html
<picture>
        <source type="image/webp" srcset="milu.webp">
        <source media="(min-width: 650px)" srcset="TCS/TCS-19112.jpg, TCS/TCS-19112.@2x.jpg 2x, TCS/TCS-19112@3x.jpg 3x">
        <source media="(min-width: 320px)" srcset="corgi/sherlock-the-corgi.jpg, corgi/sherlock-the-corgi@2x.jpg 2x, corgi/sherlock-the-corgi@3x.jpg 3x">
        <img src="TCS/TCS-19112.jpg" sizes="" alt="Trinh Cong Son">
    </picture>
```

If we want to style for image in picture, the `img` element is the element we want to style

```css
picture img {
  max-width: 100%;
  height: auto
}
```

`img` element  will be the representative for all image sources

- The computer screen is 96 PPI - pixel per inch
- and the phone density is 2x or 3x compare as  the computer screen



We can turn the image into a hyperlink by place it inside an anchor tags:

```html
<a href="https://html.spec.whatwg.org/multipage/embedded-content.html">
            <img src="milu.webp" alt="The HTML5 Badge logo" />
    </a>
```



We can create a map within an image by `map` element:

```html
<img src="foo.com" alt="Foo" usemap="#foo">
<map name="foo">
	<area shape="rect" coords="0, 0, 50, 50" href="htpp://google.com" alt="Google">
</map>
```

When user click on the shape in `"0, 0, 50, 50"` coordinate, the site in `href` attribute will be opened.

-  We can define an dead area by not give the `href` attribute
- If we want the area covers all the image, set the `shape` attribute to `default` and don’t give the `coords` attribute