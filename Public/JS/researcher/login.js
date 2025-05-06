// Researcher Login functionality

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Check if user is already logged in
    const token = localStorage.getItem('researcher_token');
    if (token) {
        // Redirect to dashboard if already logged in
        window.location.href = '/HTML/researcher/dashboard.html';
    }
    
    // Handle login form submission
    async function handleLogin(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember')?.checked || false;
        
        // Validate input
        if (!username || !password) {
            showError('Username and password are required');
            return;
        }
        
        try {
            // Show loading state
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
            submitBtn.disabled = true;
            
            // Send login request to API
            const response = await fetch('/api/researchers/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Invalid username or password');
            }
            
            // Store token and researcher info
            if (rememberMe) {
                // Store for longer if "remember me" is checked
                localStorage.setItem('researcher_token', data.token);
                localStorage.setItem('researcher_info', JSON.stringify(data.researcher));
            } else {
                // Use session storage if not remembered
                sessionStorage.setItem('researcher_token', data.token);
                sessionStorage.setItem('researcher_info', JSON.stringify(data.researcher));
            }
            
            // Redirect to dashboard
            window.location.href = '/HTML/researcher/dashboard.html';
            
        } catch (error) {
            showError(error.message);
            
            // Reset button state
            const submitBtn = loginForm.querySelector('button[type="submit"]');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }
    
    // Display error message
    function showError(message) {
        loginError.style.display = 'flex';
        loginError.querySelector('.alert-message').textContent = message;
        
        // Hide after 5 seconds
        setTimeout(() => {
            loginError.style.display = 'none';
        }, 5000);
    }
});