// Form Handler Module for Contact Forms

class FormHandler {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.init();
    }
    
    init() {
        if (!this.form) return;
        
        this.bindEvents();
        this.setupValidation();
    }
    
    bindEvents() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        
        // Real-time validation
        const inputs = this.form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', this.validateField.bind(this));
            input.addEventListener('input', this.clearError.bind(this));
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        
        if (this.validateForm()) {
            this.submitForm();
        }
    }
    
    validateForm() {
        const requiredFields = this.form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField({ target: field })) {
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    validateField(e) {
        const field = e.target;
        const value = field.value.trim();
        const type = field.type;
        
        let isValid = true;
        let errorMessage = '';
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        
        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }
        
        // Phone validation (basic)
        if (type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }
        
        this.showFieldError(field, isValid ? '' : errorMessage);
        return isValid;
    }
    
    showFieldError(field, message) {
        // Remove existing error
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error class
        field.classList.toggle('error', !!message);
        
        // Add error message
        if (message) {
            const errorElement = document.createElement('span');
            errorElement.className = 'field-error';
            errorElement.textContent = message;
            errorElement.style.color = 'var(--color-error, #e74c3c)';
            errorElement.style.fontSize = 'var(--font-size-sm)';
            errorElement.style.marginTop = 'var(--spacing-xs)';
            errorElement.style.display = 'block';
            
            field.parentNode.appendChild(errorElement);
        }
    }
    
    clearError(e) {
        const field = e.target;
        field.classList.remove('error');
        
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }
    
    setupValidation() {
        // Add validation styles
        const style = document.createElement('style');
        style.textContent = `
            .field-error {
                color: var(--color-error, #e74c3c);
                font-size: var(--font-size-sm);
                margin-top: var(--spacing-xs);
                display: block;
            }
            
            input.error,
            textarea.error {
                border-color: var(--color-error, #e74c3c);
                box-shadow: 0 0 0 2px rgba(231, 76, 60, 0.2);
            }
        `;
        document.head.appendChild(style);
    }
    
    submitForm() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        this.setSubmitState(true);
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            console.log('Form submitted:', data);
            this.showSuccess('Thank you for your message! I\'ll get back to you soon.');
            this.form.reset();
            this.setSubmitState(false);
        }, 1500);
        
        // For real implementation, use fetch or XMLHttpRequest
        // this.sendFormData(data);
    }
    
    async sendFormData(data) {
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                this.showSuccess('Thank you for your message! I\'ll get back to you soon.');
                this.form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            this.showError('Sorry, there was an error sending your message. Please try again.');
        } finally {
            this.setSubmitState(false);
        }
    }
    
    setSubmitState(isSubmitting) {
        const submitButton = this.form.querySelector('[type="submit"]');
        if (submitButton) {
            submitButton.disabled = isSubmitting;
            submitButton.textContent = isSubmitting ? 'Sending...' : 'Send Message';
        }
    }
    
    showSuccess(message) {
        this.showMessage(message, 'success');
    }
    
    showError(message) {
        this.showMessage(message, 'error');
    }
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        messageElement.style.padding = 'var(--spacing-base)';
        messageElement.style.borderRadius = 'var(--border-radius-base)';
        messageElement.style.marginTop = 'var(--spacing-base)';
        messageElement.style.backgroundColor = type === 'success' ? 
            'var(--color-success-bg, #d4edda)' : 
            'var(--color-error-bg, #f8d7da)';
        messageElement.style.color = type === 'success' ? 
            'var(--color-success, #155724)' : 
            'var(--color-error, #721c24)';
        
        this.form.appendChild(messageElement);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormHandler;
} else if (typeof window !== 'undefined') {
    window.FormHandler = FormHandler;
} 