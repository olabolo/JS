const basket = [{}]
function calcBasket(goods) {
    let result = 0;
    for (let i = 0; i < goods.length; i++) {

        result += getPriceByCount(basket[i].title, basket[i].count);
    }
    return result;

}

console.log(calcBasket(basket));



