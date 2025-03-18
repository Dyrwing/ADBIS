document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.mobile-menu-btn') && 
            !event.target.closest('.nav-menu') && 
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Modal functionality
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const loginButton = document.getElementById('loginButton');
    const heroLoginButton = document.getElementById('heroLoginButton');
    const signupButton = document.getElementById('signupButton');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const closeSignupModal = document.getElementById('closeSignupModal');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToLogin = document.getElementById('switchToLogin');
    
    // Open login modal
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
    });
    
    heroLoginButton.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.add('active');
    });
    
    // Open signup modal
    signupButton.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.classList.add('active');
    });
    
    // Close modals
    closeLoginModal.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });
    
    closeSignupModal.addEventListener('click', () => {
        signupModal.classList.remove('active');
    });
    
    // Switch between modals
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginModal.classList.remove('active');
        signupModal.classList.add('active');
    });
    
    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupModal.classList.remove('active');
        loginModal.classList.add('active');
    });
    
    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
        if (e.target === signupModal) {
            signupModal.classList.remove('active');
        }
    });
    
    // Handle form submissions
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // In a real app, you would send this data to your server
        console.log('Login attempt:', { email, password });
        
        // Simulate successful login
        alert('Login successful!');
        loginModal.classList.remove('active');
    });
    
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        // Basic validation
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        // In a real app, you would send this data to your server
        console.log('Signup attempt:', { name, email, password });
        
        // Simulate successful signup
        alert('Signup successful!');
        signupModal.classList.remove('active');
    });
    
    // Mock projects data
    const mockProjects = [
        {
            id: 1,
            title: "Sleep Patterns in Young Adults",
            description: "This research aims to understand sleep patterns and their impact on cognitive function in young adults.",
            type: "observational",
            location: "Copenhagen",
            duration: "4 weeks",
            compensation: "1,000 DKK",
            startDate: "April 15, 2025",
            criteria: ["18-25 years", "No sleep disorders", "Non-smoker"],
            gender: "all",
            ageRange: "18-25"
        },
        {
            id: 2,
            title: "Diabetes Prevention Study",
            description: "Clinical trial testing a new approach to preventing type 2 diabetes in at-risk individuals.",
            type: "clinical",
            location: "Aarhus",
            duration: "6 months",
            compensation: "5,000 DKK",
            startDate: "May 1, 2025",
            criteria: ["Pre-diabetic", "BMI 25-35", "No medications"],
            gender: "all",
            ageRange: "36-45"
        },
        {
            id: 3,
            title: "Women's Health Survey",
            description: "A comprehensive survey on women's health concerns, access to healthcare, and wellness practices.",
            type: "survey",
            location: "Online",
            duration: "1 hour",
            compensation: "200 DKK",
            startDate: "Immediate",
            criteria: ["Female", "Regular health check-ups"],
            gender: "female",
            ageRange: "26-35"
        },
        {
            id: 4,
            title: "Stress Management in the Workplace",
            description: "Investigating the effectiveness of different stress management techniques in professional environments.",
            type: "observational",
            location: "Odense",
            duration: "8 weeks",
            compensation: "2,500 DKK",
            startDate: "April 20, 2025",
            criteria: ["Full-time employed", "Office worker", "Reported stress"],
            gender: "all",
            ageRange: "26-35"
        },
        {
            id: 5,
            title: "Cardiovascular Health in Men",
            description: "Study on cardiovascular health indicators and lifestyle factors in middle-aged men.",
            type: "clinical",
            location: "Aalborg",
            duration: "3 months",
            compensation: "3,200 DKK",
            startDate: "June 1, 2025",
            criteria: ["Male", "No heart conditions", "Non-smoker"],
            gender: "male",
            ageRange: "46+"
        },
        {
            id: 6,
            title: "Digital Wellness Survey",
            description: "Survey on digital device usage and its impact on mental and physical wellbeing.",
            type: "survey",
            location: "Online",
            duration: "30 minutes",
            compensation: "150 DKK",
            startDate: "Immediate",
            criteria: ["Smartphone user", "Social media user"],
            gender: "all",
            ageRange: "18-25"
        }
    ];
    
    // Project rendering functionality
    const projectsGrid = document.getElementById('projectsGrid');
    const genderFilter = document.getElementById('genderFilter');
    const ageFilter = document.getElementById('ageFilter');
    const typeFilter = document.getElementById('typeFilter');
    
    // Function to render projects
    function renderProjects(projects) {
        projectsGrid.innerHTML = '';
        
        if (projects.length === 0) {
            projectsGrid.innerHTML = '<p class="no-results">No matching projects found. Try adjusting your filters.</p>';
            return;
        }
        
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <div class="criteria-list">
                        ${project.criteria.map(criterion => `<span class="criteria-item">${criterion}</span>`).join('')}
                    </div>
                    <p class="project-description">${project.description}</p>
                </div>
                <div class="project-details">
                    <div class="details-grid">
                        <div class="detail-item">
                            <i class="fas fa-flask detail-icon"></i>
                            <div class="detail-text">
                                <span class="detail-label">Type</span>
                                <span class="detail-value">${project.type.charAt(0).toUpperCase() + project.type.slice(1)}</span>
                            </div>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-map-marker-alt detail-icon"></i>
                            <div class="detail-text">
                                <span class="detail-label">Location</span>
                                <span class="detail-value">${project.location}</span>
                            </div>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-calendar-alt detail-icon"></i>
                            <div class="detail-text">
                                <span class="detail-label">Duration</span>
                                <span class="detail-value">${project.duration}</span>
                            </div>
                        </div>
                        <div class="detail-item">
                            <i class="fas fa-coins detail-icon"></i>
                            <div class="detail-text">
                                <span class="detail-label">Compensation</span>
                                <span class="detail-value">${project.compensation}</span>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="project-link">View Project</a>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Function to filter projects
    function filterProjects() {
        const genderValue = genderFilter.value;
        const ageValue = ageFilter.value;
        const typeValue = typeFilter.value;
        
        const filteredProjects = mockProjects.filter(project => {
            // Filter by gender
            if (genderValue !== 'all' && project.gender !== 'all' && project.gender !== genderValue) {
                return false;
            }
            
            // Filter by age range
            if (ageValue !== 'all' && project.ageRange !== ageValue) {
                return false;
            }
            
            // Filter by study type
            if (typeValue !== 'all' && project.type !== typeValue) {
                return false;
            }
            
            return true;
        });
        
        renderProjects(filteredProjects);
    }
    
    // Add event listeners to filters
    genderFilter.addEventListener('change', filterProjects);
    ageFilter.addEventListener('change', filterProjects);
    typeFilter.addEventListener('change', filterProjects);
    
    // Initial render
    renderProjects(mockProjects);
});