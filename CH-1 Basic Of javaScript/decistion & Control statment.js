// If..Else (Nested)
let num = 10;
console.log("If..Else (Nested):");
if (num > 0)
 {
    if (num % 2 === 0) 
    {
        console.log(num + " is a positive even number.");
    } else 
    {
        console.log(num + " is a positive odd number.");
    }
} 
else 
{
    console.log(num + " is not a positive number.");
}

// If Else If ladder
console.log("\nIf Else If ladder:");
let score = 75;
if (score >= 90) 
{
    console.log("Grade: A");
} else if (score >= 80)
 {
    console.log("Grade: B");
}
 else if (score >= 70) 
 {
    console.log("Grade: C");
}
 else if (score >= 60)
  {
    console.log("Grade: D");
} 
else 
{
    console.log("Grade: F");
}

// Switch Case
console.log("\nSwitch Case:");
let day = 2;
switch (day) 
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// While Loop
console.log("\nWhile Loop:");
let i = 0;
while (i < 5) 
{
    console.log("Iteration " + (i + 1));
    i++;
}

// Do..While Loop
console.log("\nDo..While Loop:");
let j = 0;
do 
{
    console.log("Iteration " + (j + 1));
    j++;
} while (j < 5);

// For Loop
console.log("\nFor Loop:");
for (let k = 0; k < 5; k++)
 {
    console.log("Iteration " + (k + 1));
 }

// Jump (Break and Continue)
console.log("\nJump (Break and Continue):");
for (let l = 1; l <= 5; l++)
 {
    if (l === 3) 
    {
        continue; // Skips the iteration when l is 3
    }
    if (l === 5) 
    {
        break; // Exits the loop when l is 5
    }
    console.log("Iteration " + l);
}

// Return
console.log("\nReturn:");
function add(x, y)
 {
    return x + y;
 }
console.log("The sum is:", add(3, 5));
