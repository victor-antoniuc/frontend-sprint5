const a = 25;
const b = 50;
const c = 75;

let theBiggestNumber;
let theSmallestNumber;

if (a > b && a > c) {
    theBiggestNumber = a;
} else if (b > a && b > c) {
    theBiggestNumber = b;
} else {
    theBiggestNumber = c;
}

if (a < b && a < c) {
    theSmallestNumber = a;
} else if (b < a && b < c) {
    theSmallestNumber = b;
} else {
    theSmallestNumber = c;
}

console.log("Biggest number: " + theBiggestNumber);
console.log("Smallest number: " + theSmallestNumber);