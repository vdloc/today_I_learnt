Load external templates:

```javascript
function loadUser() {
  $.get('template.mst', function(template) {
    var rendered = Mustache.render(template, {name: "Luke"});
    $('#target').html(rendered);
  });
}
```

