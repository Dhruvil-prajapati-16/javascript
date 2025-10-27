// When JavaScript needs to convert an object to a primitive value (string, number, or boolean),
//  it follows a specific algorithm. This happens in operations like:

let obj = {value: 42};

console.log(obj + 5);        // Object needs to become a number
console.log(`Value: ${obj}`); // Object needs to become a string

