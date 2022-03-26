function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        msg2.innerHTML = 'Bom Dia!'
        img.src = 'img/fotomanha.png'
        document.body.style.backgroundColor = '#cddae2'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        msg2.innerHTML = 'Boa Tarde!'
        img.src = 'img/fototarde.png'
        document.body.style.backgroundColor = '#e08249'
    } else {
        // BOA NOITE
        msg2.innerHTML = 'Boa Noite!'
        img.src = 'img/fotonoite.png'
        document.body.style.backgroundColor = '#252017'
    }
}