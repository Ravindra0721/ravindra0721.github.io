// Scroll animation for all animated sections
const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

animatedElements.forEach(el => {
  appearOnScroll.observe(el);
});
