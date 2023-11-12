const removeFromArray = function(givenArray, ...removals) {
    for (const removal of removals) {
    const index = givenArray.indexOf(removal);
    givenArray.splice(index, 1);
    }
    return givenArray;
};

// Do not edit below this line
module.exports = removeFromArray;
