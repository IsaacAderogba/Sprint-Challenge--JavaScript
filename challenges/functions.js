// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

console.log('\n*** Functions.js Section ***\n\n');


function consume(param1, param2, cb) {
  return cb(param1,param2);
}

console.log(consume("Hello", "Isaac", (arg1, arg2) => `${arg1}, ${arg2}`));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  return num1 + num2;
}
console.log(consume(65, 43, add));

function multiply(num1, num2) { 
  return num1 * num2;
}
console.log(consume(7, 9, multiply));

function greeting(fName, lName) {
  return `Hello ${fName} ${lName}, nice to meet you!`;
}

console.log(consume("Isaac", "Aderogba", greeting));


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*
nestedFunction() can access internal in the same way that myFunction() can access external - i.e. they both see that the variable
doesn't exist in their local execution context, and they thus reach into the wider execution context to find a variable that matches.
For nestedFunction(), that means accessing the 'internal' variable outside of it's local execution context, and for myFunction(), that 
means accessing 'external' that's outside of its own execution context.

This is often called a closure, meaning that the inner function has access to the enclosing function's variables.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!"; 

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();