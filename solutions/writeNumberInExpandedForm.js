function expandedForm(num) {
    let digit = 1;
    let temp = num;
    let res = [];
    while (temp) {
        temp % 10 && res.unshift(digit * (temp % 10));
        temp = parseInt(temp / 10);
        digit *= 10;
    }
    return res.join(" + ");
}
