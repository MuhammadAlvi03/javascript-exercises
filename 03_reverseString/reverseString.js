const reverseString = function(text) {
    myArray = text.split("");
    myArrayReversed = myArray.reverse();
    stringReversed = myArrayReversed.join("");
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
