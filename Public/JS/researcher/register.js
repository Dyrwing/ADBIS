// Researcher Registration functionality

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');
    const registerError = document.getElementById('registerError');
    const registerSuccess = document.getElementById('registerSuccess');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }
    
    // Handle registration form submission
    async function handleRegistration(event) {
        event.preventDefault();
        
        // Get form values
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const institution = document.getElementById('institution').value;
        const termsAgree = document.getElementById('termsAgree').checked;
        
        // Basic validation
        if (!username || !password || !confirmPassword || !fullName || !email || !institution) {
            showError('All fields are required');
            return;
        }
        
        if (password !== confirmPassword) {
            showError('Passwords do not match');
            return;
        }
        
        if (password.length < 8) {
            showError('Password must be at least 8 characters');
            return;
        }
        
        if (!termsAgree) {
            showError('You must agree to the terms and conditions');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address');
            return;
        }
        
        try {
            // Show loading state
            const submitBtn = registrationForm.querySelector('button[type="submit"]');
            const originalButtonText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
            submitBtn.disabled = true;
            
            // Send registration request to API
            const response = await fetch('/api/researchers/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                    fullName,
                    email,
                    institution
                })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }
            
            // Show success message
            showSuccess('Registration successful! You can now login.');
            
            // Reset the form
            registrationForm.reset();
            
            // Redirect to login page after a delay
            setTimeout(() => {
                window.location.href = '/HTML/researcher/login.html';
            }, 3000);
            
        } catch (error) {
            showError(error.message);
            
            // Reset button state
            const submitBtn = registrationForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = originalButtonText;
            submitBtn.disabled = false;
        }
    }
    
    // Display error message
    function showError(message) {
        registerSuccess.style.display = 'none';
        registerError.style.display = 'flex';
        registerError.querySelector('.alert-message').textContent = message;
        
        // Scroll to error message
        registerError.scrollIntoView({ behavior: 'smooth' });
        
        // Hide after 5 seconds
        setTimeout(() => {
            registerError.style.display = 'none';
        }, 5000);
    }
    
    // Display success message
    function showSuccess(message) {
        registerError.style.display = 'none';
        registerSuccess.style.display = 'flex';
        registerSuccess.querySelector('.alert-message').textContent = message;
        
        // Scroll to success message
        registerSuccess.scrollIntoView({ behavior: 'smooth' });
    }
});