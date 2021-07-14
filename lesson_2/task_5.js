let arg1 = +prompt('Введите число arg1');
let arg2 = +prompt('Введите число arg2');

function summa(x, y) {
    return (x + y);
}
function minus(x, y) {
    return (x - y);
}
function del(x, y) {
    return (x / y);
}
function umn(x, y) {
    return (x * y);
}
let result = 'Сумма чисел arg1 и arg2: ' + summa(arg1, arg2) + ', Вычитание чисел arg1 и arg2: ' + minus(arg1, arg2) + ' Умножение чисел arg1 и arg2: ' + umn(arg1, arg2) + ' Деление чисел arg1 и arg2: ' + del(arg1, arg2);
console.log(arg1, arg2, result);
alert(result);