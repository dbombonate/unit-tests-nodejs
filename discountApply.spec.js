const discountApply = require('./discountApply');

function discountApplyBasicTest(){
    return discountApply(10, 2) === 8;
}

function discountApplyGreaterValue(){
    return discountApply(2, 4) === 0;
}

function discountApplyEmptyValue(){
    const productValue = 10
    return discountApply(productValue) === productValue;
}

function discountApplyNegativeValue(){
    return discountApply(5, -2) === 5;
}

console.log('A aplicação de desconto padrão está funcionando? ')
console.log(discountApplyBasicTest());

console.log('A aplicação de desconto com valor de desconto maior que produto está funcionando? ')
console.log(discountApplyNegativeValue());

console.log('A aplicação de desconto com valor vazio retorna somente valor do produto?');
console.log(discountApplyEmptyValue());

console.log('A aplicação de desconto com valor de desconto negativo está funcionando?')
console.log(discountApplyNegativeValue());