function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') // mesma coisa que querySelector
    var res = document.querySelector('div#res') // mesma coisa que getElementById
    if (fano.value.length == 0 || fano.value > ano) /* poderia ser *Number(fano.value)*, que estaria certo */ {
        alert('[ALGO ERRADO NÃO TA CERTO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','img/criança-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/jovem-h.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src','img/adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src','img/idoso-h.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','img/criança-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/jovem-m.png')
            } else if (idade < 65) {
                //Adulto
                img.setAttribute('src','img/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src','img/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.padding = '5 px'
        res.innerHTML = `Detectamos que você é ${gênero} com ${idade} anos`
        res.appendChild(img)
        img.style.padding = '10px'
    }
}