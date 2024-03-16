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
