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
setInterval(siguienteSlide, 10000);