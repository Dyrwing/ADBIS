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
    
    // Check if projects grid exists (only on home page)
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        // Filter dropdowns
        const filterDropdowns = document.querySelectorAll('.filter-dropdown');
        const clearFiltersButton = document.getElementById('clearFiltersButton');
        const resultsCount = document.getElementById('resultsCount');
        
        // Filter values object - all categories now use arrays for multiple selections
        const filterValues = {
            gender: [],
            age: [],
            type: [],
            diagnosis: [],
            center: []
        };
        
        // Initialize dropdowns
        filterDropdowns.forEach(dropdown => {
            const button = dropdown.querySelector('.filter-button');
            const menu = dropdown.querySelector('.dropdown-menu');
            const options = dropdown.querySelectorAll('.dropdown-option');
            const filterType = button.getAttribute('data-filter');
            
            // Mark 'All' option as selected by default
            options[0].classList.add('selected');
            
            // Open dropdown when button is clicked
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close all other dropdowns
                filterDropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.classList.remove('open');
                    }
                });
                
                // Toggle current dropdown
                dropdown.classList.toggle('open');
                button.classList.toggle('active');
            });
            
            // Handle option selection
            options.forEach(option => {
                option.addEventListener('click', () => {
                    const value = option.getAttribute('data-value');
                    const selectedTextElement = document.getElementById(`selected${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`);
                    
                    // Handle 'All' option
                    if (value === 'all') {
                        // If 'All' is clicked, clear other selections
                        options.forEach(o => o.classList.remove('selected'));
                        option.classList.add('selected');
                        filterValues[filterType] = [];
                        selectedTextElement.textContent = 'All';
                    } 
                    // Handle multi-option selection
                    else if (option.classList.contains('multi-option')) {
                        // Remove 'All' selection if it was previously selected
                        options[0].classList.remove('selected');
                        
                        // Toggle this option's selection state
                        option.classList.toggle('selected');
                        
                        // Update the values array
                        if (option.classList.contains('selected')) {
                            // Add to array if selected
                            filterValues[filterType].push(value);
                        } else {
                            // Remove from array if deselected
                            const index = filterValues[filterType].indexOf(value);
                            if (index > -1) {
                                filterValues[filterType].splice(index, 1);
                            }
                        }
                        
                        // If no options are selected, select 'All' again
                        if (filterValues[filterType].length === 0) {
                            options[0].classList.add('selected');
                            selectedTextElement.textContent = 'All';
                        } else {
                            // Update text to show number of selections
                            selectedTextElement.textContent = `${filterValues[filterType].length} selected`;
                        }
                    }
                    
                    // Check if any filters are active
                    const anyFilterActive = Object.values(filterValues).some(arr => arr.length > 0);
                    clearFiltersButton.disabled = !anyFilterActive;
                    
                    // Set active state to button if a filter is selected
                    if (filterValues[filterType].length > 0) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                    
                    // Apply filters
                    fetchAndFilterProjects();
                });
            });
        });
        
        // Function to render projects
        function renderProjects(projects) {
            projectsGrid.innerHTML = '';
              if (projects.length === 0) {
                projectsGrid.innerHTML = '<p class="no-results">Ingen matchende projekter fundet. Prøv at justere dine filtre.</p>';
                resultsCount.textContent = 'Ingen resultater';
                return;
            }
            
            resultsCount.textContent = `${projects.length} projekt${projects.length !== 1 ? 'er' : ''} fundet`;
            
            // Add filtering class for animation
            projectsGrid.classList.add('filtering');
            
            setTimeout(() => {
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
                            <div class="details-grid">                                <div class="detail-item">
                                    <i class="fas fa-flask detail-icon"></i>
                                    <div class="detail-text">
                                        <span class="detail-label">Type</span>
                                        <span class="detail-value">${project.type.charAt(0).toUpperCase() + project.type.slice(1)}</span>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <i class="fas fa-map-marker-alt detail-icon"></i>
                                    <div class="detail-text">
                                        <span class="detail-label">Lokation</span>
                                        <span class="detail-value">${project.location}</span>
                                    </div>
                                </div>
                                <div class="detail-item">
                                    <i class="fas fa-calendar-alt detail-icon"></i>
                                    <div class="detail-text">
                                        <span class="detail-label">Varighed</span>
                                        <span class="detail-value">${project.duration}</span>
                                    </div>
                                </div>
                            </div>                            <a href="/HTML/project-detail.html?id=${project.id}" class="project-link">Se Projekt</a>
                        </div>
                    `;
                    
                    projectsGrid.appendChild(projectCard);
                });
                
                // Remove filtering class to complete animation
                projectsGrid.classList.remove('filtering');
            }, 200);
        }
        
        // Function to fetch projects with filters
        function fetchAndFilterProjects() {            // Show loading state
            projectsGrid.innerHTML = '<div class="loading-spinner"><i class="fas fa-spinner fa-spin"></i><p>Indlæser projekter...</p></div>';
            
            // Build query parameters for API call
            const queryParams = new URLSearchParams();
            
            // Add filter values to query parameters
            Object.keys(filterValues).forEach(key => {
                if (filterValues[key].length > 0) {
                    filterValues[key].forEach(value => {
                        queryParams.append(key, value);
                    });
                }
            });
            
            // Call API with filters
            fetch(`/api/projects?${queryParams.toString()}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(projects => {
                    renderProjects(projects);
                })                .catch(error => {
                    console.error('Error fetching projects:', error);
                    projectsGrid.innerHTML = '<p class="error-message">Fejl ved indlæsning af projekter. Prøv venligst igen senere.</p>';
                    resultsCount.textContent = 'Fejl';
                });
        }
        
        // Clear filters functionality
        clearFiltersButton.addEventListener('click', () => {
            // Reset all filter values to empty arrays
            Object.keys(filterValues).forEach(key => {
                filterValues[key] = [];
            });
            
            // Reset UI
            filterDropdowns.forEach(dropdown => {
                const options = dropdown.querySelectorAll('.dropdown-option');
                const filterType = dropdown.querySelector('.filter-button').getAttribute('data-filter');
                const selectedTextElement = document.getElementById(`selected${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`);
                
                // Mark first option (All) as selected
                options.forEach((option, index) => {
                    if (index === 0) {
                        option.classList.add('selected');
                    } else {
                        option.classList.remove('selected');
                    }
                });
                
                // Reset button text and state
                selectedTextElement.textContent = 'All';
                dropdown.querySelector('.filter-button').classList.remove('active');
            });
            
            // Disable clear button
            clearFiltersButton.disabled = true;
            
            // Fetch all projects without filters
            fetchAndFilterProjects();
        });
        
        // Close dropdowns when clicking elsewhere
        document.addEventListener('click', () => {
            filterDropdowns.forEach(dropdown => {
                dropdown.classList.remove('open');
                dropdown.querySelector('.filter-button').classList.remove('active');
            });
        });
        
        // Prevent closing when clicking inside dropdown
        filterDropdowns.forEach(dropdown => {
            dropdown.querySelector('.dropdown-menu').addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
        
        // Initial fetch when page loads
        fetchAndFilterProjects();
    }

    // Interest form modal functionality (if on home page)
    const interestModal = document.getElementById('interestModal');
    const exploreProjectsBtn = document.getElementById('exploreProjectsBtn');
    const closeInterestModal = document.getElementById('closeInterestModal');
    const heroInterestBtn = document.getElementById('heroInterestBtn');

    if (exploreProjectsBtn && interestModal) {
        exploreProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // If hero interest button exists, set up its event listener
    if (heroInterestBtn && interestModal) {
        heroInterestBtn.addEventListener('click', (e) => {
            e.preventDefault();
            interestModal.classList.add('active');
        });
    }
    
    if (closeInterestModal) {
        closeInterestModal.addEventListener('click', () => {
            interestModal.classList.remove('active');
        });
        
        // Close interest modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === interestModal) {
                interestModal.classList.remove('active');
            }
        });
    }
    
    // Handle general interest form submission
    const generalInterestForm = document.getElementById('generalInterestForm');
    if (generalInterestForm) {
        generalInterestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('generalName').value;
            const email = document.getElementById('generalEmail').value;
            const phone = document.getElementById('generalPhone').value;
            const interests = document.getElementById('generalInterests').value;
            
            // In a real app, you would send this data to your server
            console.log('General interest submitted:', { 
                name, 
                email, 
                phone,
                interests 
            });
            
            // Simulate successful submission
            alert('Your interest has been submitted successfully! Our team will contact you about relevant psychiatric research opportunities.');
            interestModal.classList.remove('active');
        });
    }
});