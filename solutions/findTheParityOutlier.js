function findOutlier(integers) {
    let obj = {};
    let reduced = integers.map((el) => el % 2);
    reduced
        .map((el) => el % 2)
        .forEach((el) => {
            obj[el] ? (obj[el] = obj[el] + 1) : (obj[el] = 1);
        });
    let val = Object.keys(obj).find((el) => obj[el] === 1);

    return integers[reduced.indexOf(parseInt(val))];
}
