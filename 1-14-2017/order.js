// Instructions:
// Starting from a blank file, create a Node-based command-line application that takes in a series of numbers from the user and returns the numbers sorted in ascending order.
// Note: Feel free to use Stack Overflow or Google to find the code for sorting integers numerically.
var numbers = (process.argv).slice(2);

function sorting(a, b) {
    return a - b;
}

var solution = numbers.map(parseFloat).sort(sorting);
console.log(solution);
`
