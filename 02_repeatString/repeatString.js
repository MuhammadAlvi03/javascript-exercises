const repeatString = function(text, repeatTimes) {
    let string = '';
        if (repeatTimes < 0) {
            return 'ERROR';
        } else {
            for (let i = 0; i < repeatTimes; i++) {
                string += `${text}`;
            }
            return string;
        }
};




// Do not edit below this line
module.exports = repeatString;
