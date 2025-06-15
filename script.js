// DOM Elements
const darkModeToggle = document.getElementById('darkModeToggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.querySelector('.contact-form');

// Dark Mode Functionality
function initDarkMode() {
    // Check for saved preference
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    });
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Project Filter Functionality
function initProjectFilter() {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filter = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(project => {
                if (filter === 'all' || project.getAttribute('data-category') === filter) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
}

// Contact Form Functionality
function initContactForm() {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show sending state
        const submitBtn = contactForm.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate sending (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Show success message
            alert('Message sent successfully!');
            contactForm.reset();
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Scroll Animation
function initScrollAnimation() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkScroll() {
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Check on initial load
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initSmoothScroll();
    initProjectFilter();
    initContactForm();
    initScrollAnimation();
});
