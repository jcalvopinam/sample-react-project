// traditional if
const minumumValue = 7;

if (minumumValue >= 7) {
    console.log('approved');
} else {
    console.log('rejected');
}

// ternary operator
const result = minumumValue >= 7 ? 'approved' : 'rejected';
console.log(result);

// higher number
let max = 0;

const a = 31;
const b = 43;
const c = 13;

max = a > b ? a : b;
max = max > c ? max : c;
console.log(`The highest number between ${a}, ${b} and ${c} is: ${max}`);