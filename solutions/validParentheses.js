function validParentheses(parens) {
    let temp = 0,
        i = 0;
    while (i < parens.length) {
        parens.charAt(i) === "(" && temp++;
        parens.charAt(i) === ")" && temp--;
        i++;
        if (temp < 0) return false;
    }
    return temp == 0;
}

console.log(validParentheses("())"));
console.log(validParentheses("("));
