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
