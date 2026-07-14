const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 220; i += 1) {
  const star = document.createElement('span');
  const size = Math.random() * 2.8 + 0.6;
  const opacity = 0.2 + Math.random() * 0.8;
  const duration = 2 + Math.random() * 4;

  star.style.position = 'absolute';
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.background = 'white';
  star.style.borderRadius = '50%';
  star.style.opacity = opacity;
  star.style.animation = `twinkle ${duration}s ease-in-out infinite`;
  star.style.animationDelay = `${Math.random() * 3}s`;

  starsContainer.appendChild(star);
}

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  const offset = 140;

  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - offset) {
      current = section.id;
    }
  });

  links.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});
