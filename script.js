const totalFotos = 10;

let fotoAtual = 1;

function atualizar() {

    document.getElementById("foto").src =
        "images/foto" + fotoAtual + ".jpg";

    document.getElementById("contador").innerText =
        fotoAtual + " / " + totalFotos;

}

function proximaFoto() {

    fotoAtual++;

    if (fotoAtual > totalFotos) {
        fotoAtual = 1;
    }

    atualizar();

}

atualizar();
