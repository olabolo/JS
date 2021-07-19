const val = ' руб.'
const basket = [
    {
        product: "Ручка",
        price: 60

    },
    {
        product: "Карандаш",
        price: 30
    },
    {
        product: "Линейка",
        price: 20
    },
    {
        product: "Резинка",
        price: 10
    },
    {
        product: "Тетрадь",
        price: 50
    }
]

function calcBasket(basket)
let calcBasket = 0
for (let prod of basket) {
    calcBasket += prod.price;
    return calcBasket;

}
console.log('Итого: ' + calcBasket + val);
