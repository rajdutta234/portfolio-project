export class DarkMode {
    constructor() {
        this.darkModeToggle = document.getElementById('darkModeToggle');
        this.body = document.body;
        
        this.init();
    }

    init() {
        // Check for saved preference
        this.loadPreference();
        
        // Handle toggle click
        this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    loadPreference() {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        if (darkMode) {
            this.body.classList.add('dark-mode');
            this.darkModeToggle.classList.add('active');
        }
    }

    toggleDarkMode() {
        this.body.classList.toggle('dark-mode');
        this.darkModeToggle.classList.toggle('active');
        
        // Save preference
        localStorage.setItem('darkMode', this.body.classList.contains('dark-mode'));
    }
}

// Initialize dark mode
new DarkMode();
