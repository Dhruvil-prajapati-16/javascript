 // purposes: Unique Object Property Keys.
 // we can pass single argument to Symbol() function    
 let apple1 = Symbol("redapple");
 let apple2 = Symbol('greenapple');

 console.log(apple1 == apple2); // false 

//  usecase:=
//  Unique keys for objects
// Private or hidden properties
// Prevent conflicts in libraries
// Shared symbols via global registry
// Custom object behaviors with well-known symbols
