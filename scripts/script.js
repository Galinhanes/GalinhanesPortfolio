let currentIndex = 0;
let btn1=document.getElementById("circulo1");
let btn2=document.getElementById("circulo2");
let btn3=document.getElementById("circulo3");
let btn4=document.getElementById("circulo4");


const slides = document.querySelectorAll('.slider__slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider__contenedor');
function mostrarSlide(index) {
 if (index < 0) {
 currentIndex = totalSlides - 1;
 } else if (index >= totalSlides) {
 currentIndex = 0;
 } else {
 currentIndex = index;
 }
 const translateValue = -currentIndex * 100 + '%';
 sliderContainer.style.transform = 'translateX(' + translateValue + ')';
 sliderContainer.style.transform = `translateX(${translateValue})`;
 colorbotons()

}
function siguienteSlide() {
 mostrarSlide(currentIndex + 1);
}
function previaSlide() {
 mostrarSlide(currentIndex - 1); 
}

function colorbotons(){
    if(currentIndex==0){
        btn1.classList.add("vermello");
        btn2.classList.remove("vermello");
        btn3.classList.remove("vermello");
        btn4.classList.remove("vermello"); }
        else if(currentIndex==1){btn1.classList.remove("vermello");
            btn2.classList.add("vermello");
            btn3.classList.remove("vermello");
            btn4.classList.remove("vermello");}
            else if(currentIndex==2){btn1.classList.remove("vermello");
                btn2.classList.remove("vermello");
                btn3.classList.add("vermello");
                btn4.classList.remove("vermello");}
                else if(currentIndex==3){btn1.classList.remove("vermello");
                    btn2.classList.remove("vermello");
                    btn3.classList.remove("vermello");
                    btn4.classList.add("vermello");}
}
// Autoplay
setInterval(siguienteSlide, 15000);

//cousasbotón
let contedor1=document.getElementById('contedor1');
let contedor2=document.getElementById('contedor2');
let contedor3=document.getElementById('contedor3');
let carpa1=document.getElementById('carpa1');
let carpa2=document.getElementById('carpa2');
let dalle=document.getElementById("dalle");
let presentacion=document.getElementById("presentacion");
let habilidades=document.getElementById("habilidades");
let proxectos=document.getElementById("proxectos");
let contacto=document.getElementById("contacto");
let musica=document.getElementById("musica");
let primeira1=document.getElementById('primeira1');
let segunda1=document.getElementById('segunda1');
let terceira1=document.getElementById('terceira1');
let cuarta1=document.getElementById('cuarta1');
let quinta1=document.getElementById('quinta1');
let primeira2=document.getElementById('primeira2');
let segunda2=document.getElementById('segunda2');
let terceira2=document.getElementById('terceira2');
let cuarta2=document.getElementById('cuarta2');
let quinta2=document.getElementById('quinta2');
let primeira3=document.getElementById('primeira3');
let segunda3=document.getElementById('segunda3');
let terceira3=document.getElementById('terceira3');
let cuarta3=document.getElementById('cuarta3');
let quinta3=document.getElementById('quinta3');
let contedorrotate=document.getElementById('contedorrotate')
let clickCount=0

function primeiroClick(){
    contedor1.classList.remove("contedoraparece");
    contedor2.classList.remove("contedoraparece");
    contedor3.classList.remove("contedoraparece");
    carpa1.classList.add("maisrapidocarpa1");
    carpa2.classList.add("maisrapidocarpa2");
    dalle.classList.add("dalle1")
   
}

function segundoClick(){
    carpa1.classList.remove("maisrapidocarpa1");
    carpa2.classList.remove("maisrapidocarpa2");
    carpa1.classList.add("superrapidocarpa1");
    carpa2.classList.add("superrapidocarpa2");
    musica.play();
    presentacion.classList.add("ondulante");
    habilidades.classList.add("ondulanteinverso");
    contacto.classList.add("ondulanteinverso");
    proxectos.classList.add("ondulante");
    dalle.classList.remove("dalle1");
    dalle.classList.add("dalle2");
    primeira1.classList.add("primeirarapido");
    segunda1.classList.add("segundarapido");
    terceira1.classList.add("terceirarapido");
    cuarta1.classList.add("cuartarapido");
    quinta1.classList.add("quintarapido");
    primeira2.classList.add("primeirarapido");
    segunda2.classList.add("segundarapido");
    terceira2.classList.add("terceirarapido");
    cuarta2.classList.add("cuartarapido");
    quinta2.classList.add("quintarapido");
    primeira3.classList.add("primeirarapido");
    segunda3.classList.add("segundarapido");
    terceira3.classList.add("terceirarapido");
    cuarta3.classList.add("cuartarapido");
    quinta3.classList.add("quintarapido");
    contedorrotate.classList.add("psyco")
   




}
function terceiroClick(){
    carpa1.classList.remove("superrapidocarpa1");
    carpa2.classList.remove("superrapidocarpa2");
    musica.pause();
    presentacion.classList.remove("ondulante");
    habilidades.classList.remove("ondulanteinverso");
    contacto.classList.remove("ondulanteinverso");
    proxectos.classList.remove("ondulante");
    contedor1.classList.add("contedoraparece");
    contedor2.classList.add("contedoraparece");
    contedor3.classList.add("contedoraparece");
    dalle.classList.remove("dalle2");
    primeira1.classList.remove("primeirarapido");
    segunda1.classList.remove("segundarapido");
    terceira1.classList.remove("terceirarapido");
    cuarta1.classList.remove("cuartarapido");
    quinta1.classList.remove("quintarapido");
    primeira2.classList.remove("primeirarapido");
    segunda2.classList.remove("segundarapido");
    terceira2.classList.remove("terceirarapido");
    cuarta2.classList.remove("cuartarapido");
    quinta2.classList.remove("quintarapido");
    primeira3.classList.remove("primeirarapido");
    segunda3.classList.remove("segundarapido");
    terceira3.classList.remove("terceirarapido");
    cuarta3.classList.remove("cuartarapido");
    quinta3.classList.remove("quintarapido");
    contedorrotate.classList.remove("psyco")
 

}
dalle.addEventListener('click',function(){
    clickCount ++;
    if(clickCount==1){primeiroClick()}
    if(clickCount==2){segundoClick()}
    if(clickCount==3){terceiroClick();clickCount=0}

    
})