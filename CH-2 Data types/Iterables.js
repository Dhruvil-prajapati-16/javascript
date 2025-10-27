//iterable is an object that can be iterated over (looped through) using constructs like for...of loops
// build in iterables are arrays, strings, map ,set, 

const arrays = [1, 2, 3, 4, 5];
for (const array of arrays) {
    console.log(array);
}
const string = "Hello";
for (const char of string) {
    console.log(char);
}

const map = new Map([["name", "Dhruvil"], ["age", 20]])
for (const [key, value] of map) {
    console.log(key, value);
}

const set = new Set([1, 2, 3, 4,4, 5]);
for (const value of set) {
    console.log(value);
}

// iterable core mathod - [Symbol.iterator]() and next()

let range = {
  from: 1,
  to: 9,
  
  [Symbol.iterator]() {
    let current = this.from;
    let end = this.to;

    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (let num of range) {
  console.log(num);
}

