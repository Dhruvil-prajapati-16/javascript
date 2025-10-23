// ================================
// Object References and Copying
// ================================

// Table Summary:
/*
| Concept      | Example                                | Effect                                   | Use Case                                         | Limitation                                           |
|--------------|----------------------------------------|-----------------------------------------|-------------------------------------------------|-----------------------------------------------------|
| Reference    | let b = a;                             | Both share same object                  | Shared configuration, global state             | Changing one changes all                            |
| Shallow Copy | let b = { ...a };                      | Top-level independent                   | Simple config or top-level props               | Nested objects still linked                         |
| Deep Copy    | let b = JSON.parse(JSON.stringify(a)); | Completely independent                   | Snapshots, undo-redo, immutable data          | Cannot copy functions, Symbols, Dates; expensive   |
*/

// ----------------
// 1. Reference
// ----------------
let obj1 = { name: "Dhruvil" };
let obj2 = obj1; // both variables point to the same object

obj2.name = "Jay";

console.log("Reference example:");
console.log("obj1.name:", obj1.name); // "Jay"
console.log("obj2.name:", obj2.name); // "Jay"

// Limitation / Where not to use:
// If you want independent copies, reference assignment is dangerous because changing one affects the other.
// Example: user data objects in a form; modifying one object might accidentally modify another if they share the same reference.

// ----------------
// 2. Shallow Copy
// ----------------
let original = { name: "Dhruvil", address: { city: "GJ" } };
let shallowCopy = { ...original }; // or Object.assign({}, original)

shallowCopy.name = "JAY";
shallowCopy.address.city = "AU"; // nested object is still shared

console.log("\nShallow Copy example:");
console.log("original.name:", original.name); // "Dhruvil" (top-level independent)
console.log("original.address.city:", original.address.city); // "AU" (nested object shared)
console.log("shallowCopy.name:", shallowCopy.name); // "JAY"

// Use Case:
// When you need independent top-level properties, but nested objects can remain shared.
// Limitation:
// Not safe for deeply nested objects. Changes in nested objects will affect the original.

// ----------------
// 3. Deep Copy
// ----------------
let deepOriginal = { name: "Dhruvil", address: { city: "GJ" } };
let deepCopy = JSON.parse(JSON.stringify(deepOriginal)); // simple deep copy

deepCopy.address.city = "AH";

console.log("\nDeep Copy example:");
console.log("deepOriginal.address.city:", deepOriginal.address.city); // "GJ" (fully independent)
console.log("deepCopy.address.city:", deepCopy.address.city); // "AH"

// Use Case:
// When you need completely independent objects, including nested objects.
// Limitation:
// JSON method cannot copy functions, Symbols, Dates, or special objects. For complex objects, use libraries like lodash _.cloneDeep.
