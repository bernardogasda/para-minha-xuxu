function abrirSite(){

document.querySelector(".hero").style.display="none";

document.getElementById("conteudo").style.display="block";

window.scrollTo({
top:0,
behavior:"smooth"
});

}

const inicio=new Date("2024-06-08T00:00:00");

function atualizarContador(){

const agora=new Date();

const diff=agora-inicio;

const dias=Math.floor(diff/(1000*60*60*24));

const horas=Math.floor((diff/(1000*60*60))%24);

const minutos=Math.floor((diff/(1000*60))%60);

const segundos=Math.floor((diff/1000)%60);

document.getElementById("timer").innerHTML=`

<div>

<span>${dias}</span>

Dias

</div>

<div>

<span>${horas}</span>

Horas

</div>

<div>

<span>${minutos}</span>

Minutos

</div>

<div>

<span>${segundos}</span>

Segundos

</div>

`;

}

setInterval(atualizarContador,1000);

atualizarContador();

function criarCoracao(){

const c=document.createElement("div");

c.innerHTML="❤️";

c.className="floatingHeart";
