document.querySelectorAll('.scroll-nav .dot').forEach(dot => {
  dot.addEventListener('click', () => {
    const target = document.querySelector(dot.dataset.target);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


const toggleBtn = document.getElementById('menu-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


window.addEventListener('scroll', function () {
  const header = document.querySelector('.top-nav');
  const hero = document.querySelector('#home');

  // Verifica se a rolagem passou da altura da seção home
  const homeBottom = hero.offsetHeight;

  if (window.scrollY > homeBottom - 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});



let indiceCurso = 0;
const slidesCursos = document.querySelectorAll(".slide-curso");

function trocarSlideCursos() {
  indiceCurso = (indiceCurso + 1) % slidesCursos.length;
  document.querySelector(".slides-cursos").style.transform =
    `translateX(-${indiceCurso * 100}%)`;
}

setInterval(trocarSlideCursos, 4000); // troca a cada 4 segundos



let indice = 0;
const slides = document.querySelectorAll(".slide");

function trocarSlide() {
  indice = (indice + 1) % slides.length;
  document.querySelector(".slides").style.transform = `translateX(-${indice * 100}%)`;
}

setInterval(trocarSlide, 4000); // troca a cada 4 segundos


//paralaxx

