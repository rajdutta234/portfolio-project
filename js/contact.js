export class ContactForm {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);

        try {
            // Show loading state
            this.setLoadingState(true);

            // Simulate API call (replace with actual API endpoint)
            await this.submitForm(data);

            // Show success message
            this.showMessage('Message sent successfully!', 'success');
            this.form.reset();

        } catch (error) {
            // Show error message
            this.showMessage('Failed to send message. Please try again.', 'error');
        } finally {
            this.setLoadingState(false);
        }
    }

    async submitForm(data) {
        // Replace with actual API endpoint
        return new Promise(resolve => setTimeout(resolve, 1000));
    }

    setLoadingState(isLoading) {
        const submitBtn = this.form.querySelector('.submit-btn');
        submitBtn.disabled = isLoading;
        submitBtn.textContent = isLoading ? 'Sending...' : 'Send Message';
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;

        this.form.appendChild(messageDiv);

        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }
}

// Initialize contact form
new ContactForm();
