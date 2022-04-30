function discountApply(productValue, discountValue){
    if (productValue < discountValue) return 0;
    if (!productValue || !discountValue || discountValue < 0) return productValue;
    return productValue - discountValue;
}

module.exports = discountApply;