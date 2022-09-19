function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = 20//data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png';
        document.body.style.background = '#ffd647';
    }else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png';
        document.body.style.background = '#b0d4e0';
    }else{
        img.src = 'fotonoite.png';
        document.body.style.background = '#062931';
    }
}

