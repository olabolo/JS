function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение': return summa(arg1, arg2)
        case 'вычитание': return minus(arg1, arg2)
        case 'умножение': return umn(arg1, arg2)
        case 'деление': return del(arg1, arg2)
    }
}