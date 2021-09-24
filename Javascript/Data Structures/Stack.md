# Stack



- It’s a **linear** data structure 

- Based on **Last *In*** - **First *Out*** append or remove order

- My implementation in JS 

   ```javascript
   class Stack {
       constructor() {
           this.collection = [];
       }
       push(elem) {
           this.collection.push(elem); // push elem to top of stack
       }
       pop() {
           return this.collection.pop(); // pop out elem from top of stack
       }
       peek() {
           return this.collection[0]; // return first elem in the stack
       }
       clear() {
           this.collection = []; //clear the stack
       }
       isEmpty() {
           return !this.collection.length; //check the stack is empty or not
       }
       get stack() {
           return this.collection; // return the stack
       }
       print {
           let str = '';
           for(let item of this.collection) {
               str+= item + " ";
           }
           return str;
       }
   }
   ```

   

- The **applications** of **Stack** 

   - **String *reversal***: we push the characters of a string into a stack then pop them out like this :

     ```pseudocode
     string  = 'Hello';
     let newString = '';
     let stack = new Stack();
     for(let char of string) {
       stack.push(char)
     }
     for(let item in stack) {
      	newString += stack.pop(); 
     }
     ```

     

   - **Parenthesis checking** : check proper opening and closing parenthesis

   - **Function call** —> The legendary Call Stack

   - **Backtracking** :  If we’re in a maze, we decided to choose a path and put the path into the stack. But when after following it, we realize that it is wrong path, we can iterate the stack popped out value to find the way back to the start position.

   - For **undo** function where the last action is push to the stack and when user want to retrieve that action, the stack pop out that action.
   
   - And some applications was applied by the compiler or the system are evaluate or convert an expression or syntax parsing.