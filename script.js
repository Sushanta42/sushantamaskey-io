gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
  y: '-30%',
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  '.stagger1',
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    duration: 2,
    ease: Power4.easeOut,
  },
  '-=1.5'
);

tl.from(
  '.hero-design',
  {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: Power4.easeOut,
  },
  '-=2'
);

gsap.from('.square-anim', {
  stagger: 0.2,
  scale: 0.1,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

gsap.from('.transition2', {
  scrollTrigger: {
    trigger: '.transition2',
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.3,
});

gsap.from('.transition3', {
  scrollTrigger: {
    trigger: '.transition3',
    start: 'top bottom',
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  stagger: 0.6,
});

//nav toggle
const navHeader = document.getElementsByClassName('header')[0];
const toggleButton = document.getElementsByClassName('toggle-button')[0];

toggleButton.addEventListener('click', () => {
  navHeader.classList.toggle('active');
});

// navigation highlight
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav ul li');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach((li) => {
    // li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
});
