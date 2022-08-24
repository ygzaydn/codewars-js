function maskify(cc) {
    const reversed = cc.split("").reverse();
    const hashedReverse = reversed.map((el, ind) => (ind > 3 ? "#" : el));
    return hashedReverse.reverse().join("");
}
