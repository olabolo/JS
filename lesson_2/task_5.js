let arg1 = +prompt('Введите число a');
let arg2 = +prompt('Введите число b');

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
let result = 'Сумма чисел a и b: ' + summa(a, b) + ', Вычитание чисел a и b: ' + minus(a, b) + ' Умножение чисел a и b: ' + umn(a, b) + ' Деление чисел a и b: ' + del(a, b);
console.log(a, b, result);
alert(result);