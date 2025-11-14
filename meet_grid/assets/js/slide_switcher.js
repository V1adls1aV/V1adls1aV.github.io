const navbarItems = document.querySelectorAll('.navbar-item[data-slide]');
const slides = document.querySelectorAll('.slide');
const header = document.querySelector('header');
let currentSlide = 0;

function showSlide(index) {
    if (index < 0 || index >= slides.length) return;
    
    currentSlide = index;
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('hidden');
            navbarItems[i].classList.add('active');
        } else {
            slide.classList.add('hidden');
            navbarItems[i].classList.remove('active');
        }
    });
}

navbarItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const slideIndex = parseInt(item.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        showSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
        showSlide(currentSlide + 1);
    }
});

function updateHeaderVisibility(e) {
    if (window.innerWidth <= 768) {
        header.classList.add('visible');
        return;
    }
    
    if (e.clientY < 50 || e.target.closest('header')) {
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
}

document.addEventListener('mousemove', updateHeaderVisibility);
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        header.classList.add('visible');
    }
});

showSlide(0);

