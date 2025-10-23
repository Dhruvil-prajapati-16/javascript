// var is global scope which can change

var x = 10;
let y = 15;
const c = 25; // nerver change: 
{
  console.log("1 var: " + x);
  console.log("1 let: " + y);
}
{
  var x = 80;
  let y = 25;

  console.log("inside block");
  console.log("2 var: " + x); //80
  console.log(" 2 let: " + y); // 25
  console.log("close block");
}

console.log("3 var: " + x); // 10 but its 80
console.log("3 let: " + y); // 15 but its 15 behavie like a normal

// | Feature                       | var                                                                              | let                                                                                                       |
// | ----------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
// | Scope                         | Function-scoped (accessible anywhere within its function)                        | Block-scoped (accessible only within its `{}` block)                                                      |
// | Redeclaration                 | Allowed in the same scope                                                        | Not allowed in the same scope                                                                             |
// | Hoisting                      | The variable is hoisted and initialized to `undefined`                           | The variable is hoisted but not initialized, leading to a `ReferenceError` if accessed before declaration |
// | Global Object                 | Declaring a global `var` attaches it to the global object (`window` in browsers) | Declaring a global `let` does not attach it to the global object                                          |
// | Temporal Dead Zone (TDZ)      | No TDZ, can be used before declaration                                           | Has TDZ, cannot access before declaration                                                                 |
// | Reassignment                  | Can be reassigned                                                                | Can be reassigned                                                                                         |
// | Use in Loops                  | Can cause issues with closures in loops                                          | Works well with closures in loops                                                                         |
// | Memory Allocation             | Less efficient in block scope loops                                              | More memory-efficient in block scope loops                                                                |
// | Strict Mode Behavior          | Can lead to unexpected errors if redeclared                                      | Safer in strict mode; redeclaration throws error                                                          |
// | Readability & Maintainability | Can be confusing due to function scope and hoisting                              | Easier to read and maintain due to block scope                                                            |
