const weekLimit = require('./weekLimit');

function positiveLimit(){
    return weekLimit(10, 100) > 0;
}

function negativeLimit(){
    return weekLimit(10, 5) <  0;
}

console.log('Retorna valor positivo quando existe limite disponível?');
console.log(positiveLimit());

console.log('Retorna valor negativo quando não existe limite disponível?');
console.log(negativeLimit());