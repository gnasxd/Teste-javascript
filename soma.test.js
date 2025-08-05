const { somar } = require ('./soma')

describe(' teste de soma', () => {
    it('encontrar os multiplos', () => {
        expect(somar(1000)).toBe(171571)


    });
})