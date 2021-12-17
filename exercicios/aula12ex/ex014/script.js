function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
   
    var dia = data.getDate()
    var hora = data.getHours() 
    var minutos = data.getMinutes()

    msg.innerHTML = `Hoje é dia ${dia} ,são ${hora} horas e ${minutos} minutos`
if (hora >= 0 && hora <12){
    img.src = 'img/manha.png'
    document.body.style.background = '#e2cd9f'
    //bom dia
    } else if (hora >=12 && hora <= 18 ){
        window.document.body.style.background = 'linear-gradient( to left ,blue ,#00bfff , #eee)'
        //boa tarde
        img.src = 'img/tarde.png'
    } else {
        window.document.body.style.background = 'linear-gradient( to left ,blue ,purple , blue)'
        //boa noite
        img.src = 'img/noite.png'
    }
}
