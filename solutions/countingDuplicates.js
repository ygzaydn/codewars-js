function duplicateCount(text) {
    const trimmedText = text.toLowerCase().trim();
    const nonUniqueChars = [];

    const countUnique = (el, ind, arr) => {
        if (arr.indexOf(el) !== ind && !nonUniqueChars.includes(el)) {
            nonUniqueChars.push(el);
        }
    };

    const trimmedArray = trimmedText.split("");
    trimmedArray.forEach(countUnique);

    return nonUniqueChars.length;
}
