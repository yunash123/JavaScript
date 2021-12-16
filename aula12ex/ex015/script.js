function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'img/bebe-homen.png')
            } else if ( idade <21) {
                img.setAttribute('src', 'img/homen-jovem.png')
                //jovem
            } else if (idade <50) {
                img.setAttribute('src', 'img/homen.png')
                //adulto
            } else if (idade <123){
                img.setAttribute('src', 'img/homen-idoso.png')
                //idoso
            } else {
                img.setAttribute('src', 'img/luto.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', 'img/bebe-mulher.png')
                //criança
            } else if ( idade <21) {
                img.setAttribute('src', 'img/mulher-jovem.png')
                //jovem
            } else if (idade <50) {
                img.setAttribute('src','img/mulher.png')
                //adulto
            } else if(idade <123){
                img.setAttribute('src', 'img/mulher-idosa.png')
                //idoso
            } else {
                img.setAttribute('src', 'img/luto.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }

}