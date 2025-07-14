const removeFromArray = function(arr, ...excluded) {
    return arr.filter((element) => !excluded.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
