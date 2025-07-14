const sumAll = function(firstNum, secondNum) {
    if(firstNum <= 0 || secondNum <= 0){
        return "ERROR";
    } else if (firstNum === secondNum){
        return firstNum + secondNum;
    }

    const sum = 0;
    const [greaterNum, lesserNum] = firstNum > secondNum ? [firstNum, secondNum] : [secondNum, firstNum];
    
    for (let i = lesserNum; i <= greaterNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
