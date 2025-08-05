const { encontrandoIndices } = require ('./array')

describe ('teste de array', () => {

it('encontrando indices do array', () => {
    expect( encontrandoIndices([10, 8, 2, 16, 3])).toEqual({menorIndice: 4, maiorIndice:0})

});

})