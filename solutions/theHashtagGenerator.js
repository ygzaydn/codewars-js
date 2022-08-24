function generateHashtag(str) {
    if ((str === "") | (str === " ")) {
        return false;
    }
    const string = str.split(" ");

    let res = string.map((el) => {
        return el.charAt(0).toUpperCase() + el.substr(1);
    });
    res.unshift("#");
    res = res.join("");
    if ((res === "#") | (res.length > 140)) {
        return false;
    }

    return res;
}
