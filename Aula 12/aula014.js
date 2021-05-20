var pergunta = 'Não'
console.log('Você gostaria de comprar carne no açougue?')

if (pergunta == 'Sim') {
    var carne = 'Tenho carne'
    console.log('Voce comprou carne!! $$$$$')

console.log('Cuidado Cachorro Bravo!!! Certifique-se que possui o item Carne!')
console.log(`Você tem ${carne} carne?`)
switch (carne) {
    case 'Tenho carne':
        console.log('Você possui carne, o cachorro ira te obedecer!!')
        break;

    default:
       
        break;
}
} else {
    console.log('Você não comprou carne no açougue!!')
    console.log('Você não possui carne, o cachorro ira te atacar')
    console.log('[MORDE][MORDE][MORDE][MORDE]')

}

