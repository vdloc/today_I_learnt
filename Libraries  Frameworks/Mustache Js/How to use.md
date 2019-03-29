# Mustache 

1. Command line syntax:

   ```bash
   npm i mustache -g
   mustache <json file> <template .mustache file> > <output .html file>
   ```

   or:

   ```bash
   cat <json file> | mustache - <template .mustache file> > <output.html file>
   ```

2. If we have partials: 

   ```bash
   mustache -p <partial-1.mustache> -p <partial-2.mustache> <json file> <template .mustache file> 
   ```

   

