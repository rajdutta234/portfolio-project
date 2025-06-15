export class ProjectFilter {
    constructor() {
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.projects = document.querySelectorAll('.project-card');
        
        this.init();
    }

    init() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get filter value
                const filter = button.getAttribute('data-filter');
                
                // Filter projects
                this.filterProjects(filter);
            });
        });
    }

    filterProjects(filter) {
        this.projects.forEach(project => {
            const category = project.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                project.style.display = 'block';
                project.classList.add('fade-in');
            } else {
                project.style.display = 'none';
                project.classList.remove('fade-in');
            }
        });
    }
}

// Initialize project filter
new ProjectFilter();
