const fibonacci = function(fibIndex) {
    if (fibIndex < 0) {
        return 'OOPS';
    }
    let fib = [1, 1];
    for (let i = 0, j = i+1; j < fibIndex + 1; i++, j++) {
        let nextFib = (fib[i] + fib[j]);
        fib.push(nextFib);
    }
    let res = fib[fibIndex - 1];
    return res;
};

// Do not edit below this line
module.exports = fibonacci;
