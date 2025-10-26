
// Optional chaining (?.) is a safe way to access nested object properties,
//  even if an intermediate property doesn't exist.
// object?.property
// object?.[expression]
// object?.method()

const users = {
  list: ["Dhurvil", "jay", "krish"]
};

console.log(users?.list?.[0]);        // "Dhruvil"
console.log(users?.list?.[10]);       // undefined
console.log(users?.missing?.[0]);     // undefined 
console.log(users?.list?.[2]);        // Krish

