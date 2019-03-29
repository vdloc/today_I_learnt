# Syntax

#### Tag Types:

1. ##### Variable:

   -  {{name}} will find the __name__ key and render its value
   - all variables are HTML escaped by default. If we want to return unescaped HTML we should use triple mustache: {{{name}}} or use ampersand character : {{& name}}.

2. ##### Section:

   - Section render blocks of text one or more times, depending on the value of the key, begin with {{#person}} and end with {{/person}}

   - If the key is __false__ values or Empty lists, the section will never be rendered

   - If the key is an non-empty lists:

     ```mustache
     {{#repo}}
      <b> {{name}} </b>
     {{/repo}}
     ```

     ```json
     {
       "repo" : [
         {"name": "regen"},
         {"name": "foo"},
         {"name": "bar"}
       ]
     }
     ```

     will render out this:

     ```html
     <b>regen</b>
     <b>foo</b>
     <b>bar</b>
     ```

3. #####  Lambdas:

   - Lambda is an anonymous function and have only one expression

   - If the key is a callable object like a function a lambda, the function will be call and the returned value will be rendered

     ```mustache
     {{#foo}}
     	{{name}} is awesome
     {{/foo}}
     ```

     ```json
     {
       "name" : "Vincent",
       "foo" : function() {
         return function(text, render) {
           return "<b>" + render(text) + "</b>"
     		}
       }
     }
     ```

     will render out : 

     ```html
     <b>Vincent is awesome</b>
     ```

4. ##### Non-False values:

   - When the key is a non-false value but not a list, it will be used as context for a single rendering  of the block:

     ```mustache
     {{#person}}
     	Hi {{name}}
     {{/person}}
     ```

     ```json
     {
       "person" :{
         "name" :"Vincent"
       }
     }
     ```

     ```html
     Hi Vincent
     ```

5. ##### Inverted Sections:

   - With sections, when the key is truthy value, and the block will be rendered , but with inverted section, if the key is truthy value, it won’t rendered but if it’s falsy value, it’s will be rendered.

   - Inverted section begins with caret character - {{^foo}} and ends with {{/foo}}.

     ```mustache
     {{#foo}}
     	Hi {{name}}
     {{/foo}}
     {{^foo}}
     	Hello Bar!
     {{/foo}}
     ```

     ```json
     {
       "foo" : []
     }
     ```

     ```html
     Hello Bar!
     ```

6. ##### Comment:

   - Comment begins with a bang ( ! ) and is ignored.

     ```mustache
     <h1> Hello {{! foo}} </h1>
     ```

     ```html
     <h1> Hello </h1>
     ```

7. ##### Partials:

   - Partials begin with a greater than sign {{ > foo}}

   - It’s like import, export, or expanded template function

   - For example: 

     - Base template:

       ```mustache
       <h2> Names </h2>
       {{#names}} 
       	{{> user}}
       {{/names}}
       ```

     - User template - the partial :

       ```mustache
       <strong> {{name}} </strong>
       ```

     - is equal :

       ```mustache
       <h2> Names </h2>
       {{#names}} 
       	<strong> {{name}} </strong>
       {{/names}}
       ```

8. ##### Set Delimiter:

   - Set Delimiter tags start with equal sign ( = ).

     ```mustache
     1. {{ default_tags }} // the default tag style
     {{=<% %>=}} // change default tag style to  <% %> tag style
     2. <% foo %> new tag style
     <%={{ }}=%> change the new tag style to default tag style
     3. {{ foo }}
     ```

   - Use it when we want to avoid use default style with double curly-braces - when it appears inside text string
