let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

// Função para avançar o slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Função para retroceder o slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Configura a transição automática a cada 5 segundos
setInterval(nextSlide, 5000);

// Adiciona eventos de clique aos botões de navegação
document.querySelector('.carousel-nav.next').addEventListener('click', nextSlide);
document.querySelector('.carousel-nav.prev').addEventListener('click', prevSlide);

// Exibe o primeiro slide no início
showSlide(currentIndex);
////////////////////////////////////////////////////////////////////////////////////////////
//Código do carrossel 2

let currentIndex2 = 0;
const slides2 = document.querySelectorAll('.carousel-slide2');
const totalSlides2 = slides2.length;

function showSlide2(index2) {
    const offset2 = -index2 * 100;
    document.querySelector('.slider-container2').style.transform = `translateX(${offset2}%)`;
}

// Função para avançar o slide
function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % totalSlides2;
    showSlide2(currentIndex2);
}

// Função para retroceder o slide
function prevSlide2() {
    currentIndex = (currentIndex2 - 1 + totalSlides2) % totalSlides2;
    showSlide2(currentIndex2);
}

// Configura a transição automática a cada 5 segundos
setInterval(nextSlide2, 5000);

// Adiciona eventos de clique aos botões de navegação
document.querySelector('.carousel-nav2.next2').addEventListener('click', nextSlide2);
document.querySelector('.carousel-nav2.prev2').addEventListener('click', prevSlide2);

// Exibe o primeiro slide no início
showSlide2(currentIndex2);


/////////////////////////////////////////////////////////////////////////////////////////

//validação email

function validateEmail() {
    const emailField = document.getElementById('email');
    const email = emailField.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Entre com endereço de email válido");
        return false;
    }
    alert("Email correto e enviado com sucesso!");
    return true;
}
