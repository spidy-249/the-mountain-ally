// Animations on Scroll
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    reset: false
});

sr.reveal('.hero-content');
sr.reveal('.card', { interval: 200 });
sr.reveal('.text-content', { origin: 'left' });
sr.reveal('.custom-form', { origin: 'right' });

// Sticky Navbar Logic
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#1a1a1a';
    } else {
        navbar.style.background = 'transparent';
    }
});