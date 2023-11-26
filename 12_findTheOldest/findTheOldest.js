// Given an array of objects representing people with a birth and death year, return the oldest person.

const getAge = function(birth, death) {
    if (!death) {   // if still alive
        death = new Date().getFullYear();   // sets death to this year
    }
    return death - birth;
};

const findTheOldest = function(people) {
    let oldestPerson = people.reduce((oldest, currentPerson) => { // accumulator, currentvalue (similar to array[0] and array [1])
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
