const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("For:");
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("For of:");
for (let value of arr) {
    console.log(value);
}

console.log("ForEach:");
arr.forEach(value => console.log(value));

console.log("While:");
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}