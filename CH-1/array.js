// sum of 1D array
// Declaration and initialization of a 1D array
let array1 = [1, 0, 3, 4, 5, "Hello_world",false,true];
array1[1] = 2;
console.log(array1); // Output: [1, 2, 3, 4, 5]

// Iterating over the array
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// 2D array
console.log("2D array");
let matrix1 = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];
let matrix2 = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];
// Initialize sum variable
const sum = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Add the corresponding elements of the two matrices and store the sum in the sum matrix
for (let i = 0; i < 3; i++)
 {
  let rowOutput = "";
  for (let j = 0; j < 3; j++) 
  {
    sum[i][j] = matrix1[i][j] + matrix2[i][j];
    rowOutput = rowOutput + sum[i][j] + " ";

  }
  console.log(rowOutput);
}


