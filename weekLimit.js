// Calcula o gasto semanal e retorna o valor disponível no mês

function weekLimit(cost, actualLimit) {
    return actualLimit - cost;
};

module.exports = weekLimit;