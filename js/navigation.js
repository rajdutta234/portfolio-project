// Navigation functionality
export class Navigation {
    constructor() {
        this.nav = document.querySelector('nav');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        
        this.init();
    }

    init() {
        this.handleScroll();
        this.handleMobileMenu();
        this.handleNavLinks();
    }

    handleScroll() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                this.nav.classList.add('scrolled');
            } else {
                this.nav.classList.remove('scrolled');
            }
        });
    }

    handleMobileMenu() {
        this.mobileMenuBtn.addEventListener('click', () => {
            this.navLinks.classList.toggle('active');
        });
    }

    handleNavLinks() {
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                targetSection.scrollIntoView({ behavior: 'smooth' });
                this.navLinks.classList.remove('active');
            });
        });
    }
}

// Initialize navigation
new Navigation();
