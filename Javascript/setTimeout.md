# setTimeout

1. The returned value from any setTimeout function is a Timer ID interger

   ```javascript
   let wait = setTimeout(()=>{
     return 'Foooo!'
   },300);
   console.log(wait) //an interger like 4 or 12 or 34 but not Foooo!
   ```

   