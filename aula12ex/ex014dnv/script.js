
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window
.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos `
if (hora >= 0 && hora <12) {
    //bom dia
    document.body.style.background = '#ccc'
    img.src = 'img/manha.png'
} else if (hora <= 18){
    document.body.style.background = '#00bfff'
    //boa tarde
    img.src = 'img/tarde.png'
}else {
    document.body.style.background = 'red'
    //boa noite
    img.src = 'img/noite.png'
}

}
