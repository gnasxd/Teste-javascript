somar(1000);
function somar(limites) {
    let  multiplosDe5 = 0;
    let  multiplosDe7 = 0;

    for(let i = 0 ;i <= limites;i++){
        if(i % 5 === 0)
            multiplosDe5 += i;
        if(i % 7 === 0)
            multiplosDe7 += i;
    }
   console.log(multiplosDe5 + multiplosDe7)
    return multiplosDe5 + multiplosDe7; // agora retorna!
}

module.exports = { somar }