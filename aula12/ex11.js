var idade = 10
console.log(`Você tem ${idade} Anos. `)
if (idade < 16) {
    console.log('Não vota')
} else if (idade >= 16 && idade <18 || idade >65){
    console.log('Voto opicional')
} else {
    console.log('voto obrigatio !')
}