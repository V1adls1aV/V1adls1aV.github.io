document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const greetingSection = document.querySelector('.greeting-view');
    let lastScrollY = window.scrollY;

    function updateNavbarVisibility() {
        if (!greetingSection) return;

        const greetingSectionHeight = greetingSection.offsetHeight;
        const currentScrollY = window.scrollY;

        if (currentScrollY > greetingSectionHeight) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }

        lastScrollY = currentScrollY;
    }

    updateNavbarVisibility();

    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateNavbarVisibility);
    });

    window.addEventListener('resize', () => {
        window.requestAnimationFrame(updateNavbarVisibility);
    });
});
