/*
letf:-100%
letf:-100%
letf:-100%
overflow:hidden



renglon{
    position:absolute;
    left:0;
}

#ventana{
    position:SpeechRecognitionAlternative;
}

tope fijo -400, 0

*/

let imagenes = document.getElementsByClassName('img-carrusel');
let botones = document.getElementsByClassName('punto');
let renglon = document.getElementById('renglon');
let izquierdaBtn = document.getElementById('btn-izquierda');
let derechaBtn = document.getElementById('btn-derecha');

let left = 0;
let tope = (imagenes.length-1) - 100;
renglon.style.left = tope;

izquierdaBtn.addEventListener('click',() =>{
    if(left < 0){
        left += 100;
        renglon.style.left = left + '%';
    }
});

derechaBtn.addEventListener('click',() =>{
    if(left > tope){
        left -= 100;
        renglon.style.left = left + '%';
    }
});


Array.from(botones).forEach((boton, indice) =>{
    boton.addEventListener('click',() =>{
        left = indice * -100;
        renglon.style.left = left + '%';
    });
});