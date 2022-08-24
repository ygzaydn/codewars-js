function alphabetPosition(text) {
    let lowerText = text.toLowerCase();
    const test = [...lowerText];
    const resp = [];

    test.forEach((el, ind) => {
        if (96 < lowerText.charCodeAt(ind) && lowerText.charCodeAt(ind) < 123) {
            resp.push(lowerText.charCodeAt(ind) - 96);
        }
    });
    return resp.join(" ");
}
