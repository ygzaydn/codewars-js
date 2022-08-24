function productFib(prod) {
    const fib = [0, 1];
    let num;
    const calculateFibNext = () => {
        fib.push(fib.at(-1) + fib.at(-2));
    };

    while (1) {
        calculateFibNext();
        num = fib.at(-1) * fib.at(-2);
        if (num >= prod) {
            return [fib.at(-2), fib.at(-1), num === prod];
        }
    }
}

console.log(productFib(4895));
console.log(productFib(5895));
