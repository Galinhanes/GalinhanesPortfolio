let currentIndex = 0;
let btn1=document.getElementById("circulo1");
let btn2=document.getElementById("circulo2");
let btn3=document.getElementById("circulo3");
let btn4=document.getElementById("circulo4");
let contedor1=document.getElementById('contedor1');
let contedor2=document.getElementById('contedor2');
let contedor3=document.getElementById('contedor3');

let dalle=document.getElementById("dalle");
let clickCount=0

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

//fondo

function aparecerfondo(){
    contedor1.classList.remove("contedoraparece");
    contedor2.classList.remove("contedoraparece");
    contedor3.classList.remove("contedoraparece");
   
}
function desaparecerfondo(){
    contedor1.classList.add("contedoraparece");
    contedor2.classList.add("contedoraparece");
    contedor3.classList.add("contedoraparece");
    
}
dalle.addEventListener('click',function(){
    clickCount ++;
    if(clickCount%2 !==0){aparecerfondo();dalle.style.backgroundColor=("green")}
    else{desaparecerfondo();dalle.style.backgroundColor=("goldenrod")}

    
})