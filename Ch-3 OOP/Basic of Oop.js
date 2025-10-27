class Person
 {
    Display() {
        this.a = 5; // Assigning value to property 'a' of the object
        let a = 10; // Declaring a local variable 'a'
        console.log(a); // Output: 10 (value of local variable 'a')
    }

    Displayt() {
        let a = 30;
        console.log(this.a); // Output: 5 (value of property 'a' assigned in Display method)
    }
}

// Define a function named "add" that takes two parameters: "a" and "b"
function add(a, b) {
    return a + b; // Return the sum of the two parameters
}
add(5,800);
let result = add(5, 3);
console.log("The sum is:", result); // Output: The sum is: 8

let p1 = new Person();
p1.Display();
p1.Displayt();


   /* {
        setdata(x, y) 
        {
            name = x;
            age = y;
        }

        DisplayInfo(name, age) 
        {
            console.log(`Name: ${name}, Age: ${age}`);
        }
    }

    // Create an object of the 'Person' class
    let p1 = new Person();

    // Set data for the person
    p1.setdata("John", 30);

    // Display information about the person
    p1.DisplayInfo("John", 30);
*/