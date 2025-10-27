// it is allow to you to unpack values from arrays or objects into individual variables easily.
// types: 
// Array Destructuring
// Object Destructuring
// Skipping Values
// Renaming Variables
// Default Values
// Nested Destructuring


{
let arr = ["Dhruvil", 20, "India"];
let [name, age, country] = arr;

console.log(name, age, country);
}
{
let user = { name: "Dhruvil", age: 20 };
let { name, age } = user;

console.log(name); // Dhruvil
console.log(age);  // 20
}
{
let student = { name: "Krish", grade: "A" };
let { name, grade } = student;
console.log(name, grade); 
}
{
let [a, , c] = [10, 20, 30];
console.log(c);  // 30
}
{
let user = { name: "Dhruvil", age: 20 };
let { name: username, age: userAge } = user;
console.log(username); 
console.log(userAge);  
}

{
let [x = 10, y = 20] = [5];
console.log(x, y);  // 5 20
let { country = "India" } = {};
console.log(country); // India
}

{
let student = {
name: "Krish",
address: { city: "Ahmedabad", pin: 380015 }
};

let { address: { city, pin } } = student;
console.log(city, pin); // Ahmedabad 380015
}

{
function showUser({ name, age }) 
{
console.log(`${name} is ${age} years old`);
}
showUser({ name: "Dhruvil", age: 20 });
}