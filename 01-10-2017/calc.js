// Instructions:
// Create a command-line node application that takes in parameters like this:
// node calculator.js add 1 2 ... and outputs 3
// node calculator.js subtract 5 2 ... and outputs 3
// node calculator.js multiply 3 2 ... and outputs 6
// node calculator.js divide 8 2 ... and outputs 4
// node calculator.js remainder 7 2... and outputs 1
// Bonus: Enable your calculator application to also handle the below cases: node calculator.js exp 7 2 ... and output 49 (7 squared) node calculator.js algebra 4x+2=10... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)
// 1 Comment Collapse

var op = process.argv[2];
var n1 = parseInt(process.argv[3]);
var n2 = parseInt(process.argv[4]);
var n3 = parseInt(process.argv[5]);
var r;

switch (op) {
    case 'add':
        r = n1 + n2;
        break;
    case 'subtract':
        r = n1 - n2;
        break;
    case 'multiply':
        r = n1 * n2;
        break;
    case 'divide':
        r = n1 / n2;
        break;
    case 'remainder':
        r = n1 % n2;
        break;
    case 'squared':
        r = n1 ^ n2;
        break;
    case 'algebra':
        r = (n3 - n2) / n1;
        break;
        //4x+2=10
    default:
}
console.log(r);
