const repeatString = function(str, num) {
    const originalStr = str;
    if(num < 0){
        return "Number should be greater than zero.";
    }
    for(let i = 1; i < num; i++){
        str += originalStr;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
