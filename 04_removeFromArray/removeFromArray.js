const removeFromArray = function(givenArray, ...removals) {
    for (const removal of removals) {
        if ((givenArray.includes(removal)) == false) {
            continue;
        } else {
            const index = givenArray.indexOf(removal);
            givenArray.splice(index, 1);
        }
    }
    return givenArray;
}

// Do not edit below this line
module.exports = removeFromArray;
