const fibonacci = function(num) {
    if (num === 0) {
        return 0;
    } else if (num < 0){
        return "OOPS";
    }

    let prev = 0;
    let next = 1;

    for (let i = 1; i < num; i++) {
        let temp = next; 
        next += prev;
        prev = temp;
    }

    return next;
};

// Do not edit below this line
module.exports = fibonacci;
