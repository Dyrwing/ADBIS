document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formSuccessMessage = document.getElementById('formSuccessMessage');
    const formErrorMessage = document.getElementById('formErrorMessage');
    
    // Form input elements and their corresponding error elements
    const formInputs = {
        name: {
            element: document.getElementById('contactName'),
            error: document.getElementById('nameError'),
            validator: value => value.trim().length >= 2
        },
        email: {
            element: document.getElementById('contactEmail'),
            error: document.getElementById('emailError'),
            validator: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        },
        purpose: {
            element: document.getElementById('contactPurpose'),
            error: document.getElementById('purposeError'),
            validator: value => value !== null && value !== ""
        },
        subject: {
            element: document.getElementById('contactSubject'),
            error: document.getElementById('subjectError'),
            validator: value => value.trim().length >= 3
        },
        message: {
            element: document.getElementById('contactMessage'),
            error: document.getElementById('messageError'),
            validator: value => value.trim().length >= 10
        },
        consent: {
            element: document.getElementById('contactConsent'),
            error: document.getElementById('consentError'),
            validator: value => value === true
        }
    };
    
    // Add input event listeners to all form fields for real-time validation
    Object.keys(formInputs).forEach(inputKey => {
        const input = formInputs[inputKey];
        
        if (input.element) {
            const eventType = input.element.type === 'checkbox' ? 'change' : 'input';
            
            input.element.addEventListener(eventType, () => {
                validateInput(inputKey);
            });
        }
    });
    
    // Validate a single input field
    function validateInput(inputKey) {
        const input = formInputs[inputKey];
        
        if (!input || !input.element) return false;
        
        const value = input.element.type === 'checkbox' ? input.element.checked : input.element.value;
        const isValid = input.validator(value);
        
        if (isValid) {
            input.element.classList.remove('error');
            return true;
        } else {
            input.element.classList.add('error');
            return false;
        }
    }
    
    // Validate all form fields
    function validateForm() {
        let isFormValid = true;
        
        Object.keys(formInputs).forEach(inputKey => {
            if (!validateInput(inputKey)) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Hide any existing status messages
        formSuccessMessage.classList.remove('visible');
        formErrorMessage.classList.remove('visible');
        
        // Validate the form
        if (!validateForm()) {
            formErrorMessage.classList.add('visible');
            return;
        }
        
        // In a real implementation, you would send the form data to your server here
        // For this example, we'll simulate a successful form submission
        
        // Collect form data
        const formData = {
            name: formInputs.name.element.value,
            email: formInputs.email.element.value,
            phone: document.getElementById('contactPhone').value,
            purpose: formInputs.purpose.element.value,
            subject: formInputs.subject.element.value,
            message: formInputs.message.element.value
        };
        
        console.log('Form submitted:', formData);
        
        // Simulate successful API call
        setTimeout(() => {
            // Show success message
            formSuccessMessage.classList.add('visible');
            
            // Reset the form
            contactForm.reset();
            
            // Remove error classes
            Object.keys(formInputs).forEach(inputKey => {
                if (formInputs[inputKey].element) {
                    formInputs[inputKey].element.classList.remove('error');
                }
            });
            
            // Scroll to top of form to see success message
            formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 1000);
    });
    
    // Dynamically update contextual help based on purpose selection
    const contactPurpose = document.getElementById('contactPurpose');
    
    contactPurpose.addEventListener('change', () => {
        const purpose = contactPurpose.value;
        const subjectField = document.getElementById('contactSubject');
        
        // Pre-fill subject based on selected purpose
        switch (purpose) {
            case 'research-participation':
                subjectField.value = 'Question about Research Participation';
                break;
            case 'specific-study':
                subjectField.value = 'Question about a Specific Study';
                break;
            case 'researcher-inquiry':
                subjectField.value = 'Researcher Inquiry';
                break;
            case 'feedback':
                subjectField.value = 'Website Feedback';
                break;
            case 'press':
                subjectField.value = 'Press/Media Inquiry';
                break;
            default:
                subjectField.value = '';
        }
    });
});
