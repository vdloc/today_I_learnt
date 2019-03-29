# Helper

1. Helper is a identifier, followed by zero or multiple parameters, separated by space: 

   ```handlebars
   {{{<helper name> <paramter...>}}}
   {{foo "bar" true}}
   ```

2. To use the helper , we must register it by :

   ```js
   Handlebars.registerHelper('foo', function(str, boolean) {
     let result = boolean ?Handlebars.escapeExpression(srt).toUpperCase() : Handlebars.escapeExpression(srt);
     return new HandleBars.SafeString(
     	`<b> ${result} </b>`
     )
   } )
   ```

3. The parameters can be String, number, or boolean too: