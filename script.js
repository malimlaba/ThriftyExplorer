// Initialize feather icons
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Intersection Observer for animations
const initScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.scroll-animation').forEach(el => {
        observer.observe(el);
    });
};

document.addEventListener('DOMContentLoaded', initScrollAnimations);