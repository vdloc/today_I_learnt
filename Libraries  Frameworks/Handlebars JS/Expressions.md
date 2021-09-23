# Expression

1. Handlebars expressions can be very simple like Mustache expressions:

   `{{name}}` 

2. Or they can be dot-separated path like : `{{foo.bar}}` . It’s will look for the `foo` property in current context and lookup the `bar` property in `foo` context.They can also be presented aby  `{{foo/bar}}`.