function firstNonRepeatingLetter(s) {
    let chars = [];
    for (el in s.toLowerCase().split("")) {
        const char = s[el].toLowerCase();
        let temp = s.toLowerCase().slice(parseInt(el) + 1);
        if (!temp.includes(char) && !chars.includes(char)) {
            return s[el];
        }
        chars.push(char);
    }
    return "";
}

console.log(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!"));
