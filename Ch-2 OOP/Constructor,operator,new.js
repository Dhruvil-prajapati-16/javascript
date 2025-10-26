// 3 rules  1) name capital letter 2) Must be called using the 'new' operator 3) this keyword is used always with same name as constructor parameters
function User(name, age) {
    this.name = name;   // use same property names otherwise retuen undefined
    this.age = age;
}

let obj = new User("Dhruvil", 20);
console.log(obj.name, "and", obj.age);

function Add(x, y) {
 this.z = x + y;
    
}
let sum = new Add(5, 6);
console.log(sum.z);
