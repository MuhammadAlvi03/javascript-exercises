const palindromes = function (str) {
    let strParsed = str.toUpperCase().replace(/[^A-Z0-9]/g, '');
    let strArr = strParsed.split('');
    let reverseStrArr = [];
    for (let i = 0; i < strArr.length; i++) {
        reverseStrArr.unshift(strArr[i]);
    }
    let reverseStr = reverseStrArr.join('');
    if (reverseStr === strParsed) {
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;
