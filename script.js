const fotos = [
    "0e6cc9fc-8c41-4faa-9ca6-0f535d848225.jpeg",
    "517f46f3-12a2-4d38-ac44-48975b752d6c.jpeg",
    "573c739e-619f-457b-b9a8-552d742e1190.jpeg",
    "9f05a628-2459-4fb4-a3c5-32551a3c7305.jpeg",
    "IMG_4082.jpeg",
    "IMG_7567.jpeg",
    "IMG_7589.jpeg",
    "IMG_7691.jpeg",
    "c3ccce20-2ac6-49d4-a3e4-701fe2925230.jpeg",
    "d2739518-dc07-439f-b56f-872d26f6ab3d.jpeg"
];

let atual = 0;

const foto = document.getElementById("foto");

function mostrar() {
    foto.src = fotos[atual];
}

function proxima() {
    atual++;
    if (atual >= fotos.length) {
        atual = 0;
    }
    mostrar();
}

mostrar();
