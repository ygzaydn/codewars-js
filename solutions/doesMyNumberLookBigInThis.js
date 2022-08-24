function narcissistic(value) {
    let digit = 0,
        numbers = [],
        temp = value,
        res = 0;

    while (temp) {
        digit++;
        numbers.push(temp % 10);
        temp = parseInt(temp / 10);
    }

    numbers.forEach((el) => {
        res += Math.pow(el, digit);
    });
    return res === value;
}

narcissistic(371);
