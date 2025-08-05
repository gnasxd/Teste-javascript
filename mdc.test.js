const { calcularMDC } = require('./mdc')

describe ('testes de mdc', () => {

it('calcular o mdc de dois valores', () => {
    expect(calcularMDC(48, 32)).toBe(16)
})

})