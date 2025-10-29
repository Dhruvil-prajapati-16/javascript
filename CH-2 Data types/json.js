// JSON (JavaScript Object Notation) is a text-based format used to store and share data.
// It looks like JavaScript objects — but it’s actually just a string.

// JavaScript object
let user = { name: "Dhruvil", age: 20 };

// JSON (string version)
let json = '{"name":"Dhruvil","age":20}';

// Convert JavaScript object to JSON
let jsonUser = JSON.stringify(user);

// Convert JSON string to JavaScript object
let jsUser = JSON.parse(json);

// What’s NOT allowed in JSON
// ❌ Functions
// ❌ Comments
// ❌ undefined
// ❌ Single quotes
// ❌ Trailing commas

