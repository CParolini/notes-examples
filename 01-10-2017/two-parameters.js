// Instructions:
// Create a command line node application that takes in two parameters and outputs whether they are equal or not.
// HINT: Start by simply logging the value of each argument to console. Then use your usual Javascript approach (recall that Node is still just Javascript).

console.log(process.argv[2] === process.argv[3] ? 'True' : 'False');
