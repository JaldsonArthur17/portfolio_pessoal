const links = document.querySelectorAll('.menu nav a[href^="#"]');
const secoes = document.querySelectorAll('main section[id]');

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        links.forEach((link) => {
          link.classList.toggle('ativo', link.getAttribute('href') === `#${entrada.target.id}`);
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

secoes.forEach((secao) => observador.observe(secao));

document.querySelectorAll('.stack img').forEach((img) => {
  const remover = () => img.remove();

  if (img.complete && img.naturalWidth === 0) {
    remover();
  } else {
    img.addEventListener('error', remover);
  }
});