const palindromes = function (text) {
    let inputText = text.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "");


    for(let i = 0; i < inputText.length/2; i--){
        if(inputText[i] !== inputText[inputText.length - 1 - i]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
