var a = process.argv[2];
var b = process.argv[3];

// Starting from a blank Javascript file, create a Node application that takes in two command line arguments and checks if they are equal. If the two numbers are equal then output: "true". Otherwise output: "false".

if (a === b){
  console.log(true);
} else {
  console.log(false);
}

// Bonus: Check if the two numbers are both multiples of 7. Again output "true" if they are and output "false" if they are not.
// Hint: console.log(process.argv) as a starting point if you are completely lost.

if ((a %7 === 0) + (b %7 === 0)){
  console.log(true);
} else {
  console.log(false);
}
