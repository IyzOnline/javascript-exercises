const palindromes = function (text) {
    let inputText = text.toLowerCase();
    inputText.replaceAll(/[^a-zA-Z0-9]/g, "");
};

// Do not edit below this line
module.exports = palindromes;
