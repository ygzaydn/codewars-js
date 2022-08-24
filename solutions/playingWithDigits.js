function digPow(n, p) {
    let total = 0;
    let count = 0;
    const string = n + "";
    for (el of string) {
        total += Math.pow(el, count + p);
        count++;
    }

    return total % n === 0 ? total / n : -1;
}
