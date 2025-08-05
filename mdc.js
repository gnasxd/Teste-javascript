function calcularMDC (a, b){
    while (b) {
        const resto = a % b;
        a = b;
        b = resto
    }
    return a;
}

const numero1 = 48
const numero2 = 32
const mdc = calcularMDC(numero1, numero2);
console.log(`MDC de ${numero1} e ${numero2}: ${mdc}`)

module.exports = { calcularMDC }
