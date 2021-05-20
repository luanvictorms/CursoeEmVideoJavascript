function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src','ccrianm.png')
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src','bjovm.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','bjovm.png')
            } else {
               // idoso
               img.setAttribute('src','avom.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                //CRIANÇA
                img.setAttribute('src','ccrianf.png')
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src','bjovf.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','bjovf.png')
            } else {
               // idoso
               img.setAttribute('src','avof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}