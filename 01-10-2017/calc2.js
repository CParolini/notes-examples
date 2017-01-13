// Instructions:
// Write a command line node application that takes in a number from the command line and finds the sum of all the multiples of 6 that are smaller than it. (ex: input: 13... output: 6 + 12 = 18)
// Bonus:
// Make the program such that it takes in two parameters: The application now taking in the first number from the command and finds all the multiples of the second smaller than it.
// Give it a set of default values in case the user doesn't provide parameters.


// Take in an input value in the for of an integer
var input = parseInt(process.argv[2]);
var sum = 0;

// Go from 6 to the number. Adding up 6 each time
for (var i = 6; i <= input; i += 6){
  // Each time add i to the sum.
  sum += i;
}

// Print out the sum
console.log(sum);
