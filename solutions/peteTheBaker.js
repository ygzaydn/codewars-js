function cakes(recipe, available) {
    const rate = [];

    Object.keys(available).forEach((el) => {
        recipe[el] && rate.push(Math.floor(available[el] / recipe[el]));
    });

    return rate.length === Object.keys(recipe).length ? Math.min(...rate) : 0;
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));
