function intervalHandler(x, y) {
    let result = [];
    let i = x + 1;
    while (i < y) {
        result.push(i);
        i++;
    }
    return result;  
};

const interval = intervalHandler(4, 31);

const eventsNumber = interval.filter(number => number % 2 === 0);

const sum = eventsNumber.reduce((a, b) => a + b, 0);

console.log(sum);