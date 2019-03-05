## Spread Operator :

- It takes objects like an array than turn into a list of items which belong to these objects.
- But the spread operator itself can't be used alone
- It can be used in some interesting way.Examples:
```javascript
function removeArrayItem(array,item){
    let idx = array.indexOf(item);
    return [...array.slice(0,idx),...array.slice(idx)];
}
```
or
```javascript
let singers = ["Lana Del Ray","Rihanna","James Blunt"];

function onlyOne(names){
    return ...names.filter(name=>{
        return (/^\w+$/).test(name);
    })
}
onlyOne(...singers)
```

or to extract all character in a string like

```javascript
let str = "loc";
[...str] = ["l","o","c"];
```



