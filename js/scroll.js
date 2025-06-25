// Scroll handling functionality
function initScrollBehavior() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.remove('active');
            
            const target = document.querySelector(this.getAttribute('href'));
            
            // Special handling for about section
            if (this.getAttribute('href') === '#about') {
                const targetRect = target.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const targetHeight = targetRect.height;
                
                // Calculate position to center the section vertically
                const windowCenter = window.innerHeight / 2;
                const elementCenter = targetHeight / 2;
                const centerPosition = window.pageYOffset + targetRect.top - windowCenter + elementCenter;
                
                window.scrollTo({
                    top: centerPosition,
                    behavior: 'smooth'
                });
            } else {
                // Default scroll behavior for other sections
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize scroll behavior
document.addEventListener('DOMContentLoaded', initScrollBehavior);
