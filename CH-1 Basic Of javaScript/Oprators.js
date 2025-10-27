// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// Assignment Operators
let x = 10;
console.log("\nAssignment Operators:");
x += 5;
console.log("x += 5:", x);
x -= 3;
console.log("x -= 3:", x);
x *= 2;
console.log("x *= 2:", x);
x /= 4;
console.log("x /= 4:", x);
x %= 3;
console.log("x %= 3:", x);

// Comparison Operators
let p = 10;
let q = 5;
console.log("\nComparison Operators:");
console.log("p > q:", p > q);
console.log("p < q:", p < q);
console.log("p >= q:", p >= q);
console.log("p <= q:", p <= q);
console.log("p == q:", p == q); // loosly comparison
console.log("p != q:", p != q);
console.log("p === q:", p === q); // strict comparison

// String Operators
let str1 = "Hello, ";
let str2 = "world!";
console.log("\nString Operators:");
console.log("str1 + str2:", str1 + str2);

// Logical Operators
let bool1 = true;
let bool2 = false;
console.log("\nLogical Operators:");
console.log("bool1 && bool2:", bool1 && bool2);
console.log("bool1 || bool2:", bool1 || bool2);
console.log("!bool1:", !bool1);

// Bitwise Operators
let num1 = 5; // Binary representation: 0101
let num2 = 3; // Binary representation: 0011
console.log("\nBitwise Operators:");
console.log("num1 & num2:", num1 & num2); // Bitwise AND
console.log("num1 | num2:", num1 | num2); // Bitwise OR
console.log("num1 ^ num2:", num1 ^ num2); // Bitwise XOR
console.log("~num1:", ~num1); // Bitwise NOT
console.log("num1 << 1:", num1 << 1); // Bitwise Left Shift
console.log("num1 >> 1:", num1 >> 1); // Bitwise Right Shift

// Ternary Operator
let age = 20;
let message = (age >= 18) ? "You are an adult" : "You are a minor";
console.log("\nTernary Operator:");
console.log(message);


// Type Operators
let arr = [1, 2, 3];
console.log("\nType Operators:");
console.log("typeof arr:", typeof arr);
console.log("Array.isArray(arr):", Array.isArray(arr));
