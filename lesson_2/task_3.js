let a = +prompt('Введите число  a');
let b = +prompt('Введите число  b');

if (a >= 0 && b >= 0) {
    console.log('Разность чисел  a и b ', a - b);
}
else if (a < 0 && b < 0) {
    console.log('Произведение чисел  a и b ', a * b);
}
else {
    console.log('Сумма чисел  a и b ', a + b);
}
