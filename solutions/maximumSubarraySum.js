var maxSequence = function (arr) {
    let total = 0;
    for (let j = 0; j <= arr.length; j++) {
        for (let i = 0; i <= j; i++) {
            let temp = arr.slice(i, j);
            let tot = temp.reduce((prev, curr) => prev + curr, 0);
            if (tot > total) {
                total = tot;
            }
        }
    }
    return total;
};
