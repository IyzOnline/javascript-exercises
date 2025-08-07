const findTheOldest = function(arr) {
    const oldestPerson = arr.reduce((oldestPerson, currentPerson) => {
        const oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
        
        const currentPersonAge = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth : new Date().getFullYear() - currentPerson.yearOfBirth;
        if (currentPersonAge > oldestPersonAge){
            oldestPerson = currentPerson;
        }
        return oldestPerson;
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
