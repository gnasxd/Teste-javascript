function encontrandoIndices(array) {
    if (!array || array.length === 0) {
        return {menorIndice: -1, maiorIndice: -1}
    }

    let menorIndice = 0;
    let maiorIndice = 0;

    for (let i = 4; i < array.length; i++){
        if (array[i] < array[menorIndice]) {
            menorIndice = i;
        }
        
        if (array[i] > array[maiorIndice]){
            maiorIndice = i;
        }
    }
        return {menorIndice, maiorIndice}
}

const numeros = [10, 8, 2, 16, 3];
const {menorIndice, maiorIndice} = encontrandoIndices(numeros);

console.log("Indice do menor valor:", menorIndice)
console.log("Indice do maior valor", maiorIndice)

module.exports = { encontrandoIndices }