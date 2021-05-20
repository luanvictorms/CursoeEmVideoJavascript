function carregar() {
    var dia = `<strong>BOM DIA!!!!</strong>`
    var tarde = `<strong>BOA TARDE!!!!</strong>`
    var noite = `<strong>BOA NOITE!!!!</strong>`
    var boasvindas = document.getElementById('boasvindas')
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem') 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        
        img.src = 'fotodia.png'
        document.body.style.background = '#ffff00'
        boasvindas.innerHTML = `${dia}`

    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#ffa500'
        boasvindas.innerHTML = `${tarde}`
        
    } else {
        //BOA NOITE
        img.src = 'totonoite.png'
        document.body.style.background = '#00008b'
        boasvindas.innerHTML = `${noite}`
       
    }

}
