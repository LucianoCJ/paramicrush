// Moviendo la posiscion random del boton NO.

function moverPosicionRamdom(elm){
    elm.style.position = 'absolute';
    //Obteniendo la latura y largo de la pantalla y no se salga el boton.
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}
 
//Mandamos llamar a los botones y la clase.
let btnSi = document.getElementById("btn_si");
let btnNo = document.getElementById("btn_no");
let divModoSexo = document.getElementsByClassName("modo_sexo")[0];
//llamo al video para pararlo.
let video = document.getElementById("video");

//Evento de escuchar y cada vez que el mouse entra el boton NO cambia de posicion.
btnNo.addEventListener('mouseenter', function(e){moverPosicionRamdom(e.target)});

btnSi.addEventListener('click', function(e){
    alert('Sabía que dirías que Sí. Casemonos y tengamos hijos. TE AMO!!! ')

    //Llamando al audio
    divModoSexo.style.display = 'block';
    const cancion = new Audio('music\\modo_hot.mp3');
    cancion.play();

    //Paro el video.
    video.pause();
});

//Crea varios patricios con los clics.
divModoSexo.addEventListener('clic', function(e){
    const img = document.createElement("img");
    img.src ="img\patricio.jpg";
   
    divModoSexo.appendChild(img);
});

window.addEventListener("beforeunload" , (event) => {
    event.preventDefault();
    event.returnValue = "";
});