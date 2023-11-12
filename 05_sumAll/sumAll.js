const sumAll = function(x, y) {
    const higherValue = Math.max(x, y);
    const lowerValue = Math.min(x, y);
    let finalSum = 0;
    if (((x < 0) || (y < 0)) || (typeof(x)) != 'number' || (typeof(y)) != 'number') {
        return 'ERROR'
    } else {
        for (let i = lowerValue; i <= higherValue; i++) { // starts at lower, ends at higher
            finalSum += i;
        }
        return finalSum;
    }
}

// Do not edit below this line
module.exports = sumAll;
