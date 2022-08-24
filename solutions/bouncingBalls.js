function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    let res = 0;
    let temp = h;
    while (temp > window) {
        res++;
        temp = temp * bounce;
        temp > window && res++;
    }
    return res;
}

console.log(bouncingBall(3.0, 1.0, 1.5)); //-1
console.log(bouncingBall(30.0, 0.66, 1.5)); //15
