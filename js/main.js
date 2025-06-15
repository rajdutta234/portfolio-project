// Import components
import { Navigation } from './navigation.js';
import { ProjectFilter } from './projects.js';
import { ContactForm } from './contact.js';
import { DarkMode } from './darkMode.js';

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
    new ProjectFilter();
    new ContactForm();
    new DarkMode();
});
