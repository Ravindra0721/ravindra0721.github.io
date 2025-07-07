// script.js

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(15, 23, 42, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.9)';
        nav.style.boxShadow = 'none';
    }
});

// Hero typing effect
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const titleText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            heroTitle.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    window.addEventListener('load', () => {
        setTimeout(typeWriter, 500);
    });
}
