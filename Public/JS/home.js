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
    
    // Mock projects data
    const mockProjects = [
        {
            id: 1,
            title: "Sleep Patterns in Depression",
            description: "This research aims to understand sleep patterns and their impact on cognitive function in individuals with depression.",
            type: "observational",
            location: "Copenhagen",
            duration: "4 weeks",
            startDate: "April 15, 2025",
            criteria: ["18-25 years", "Depression diagnosis", "Regular sleep schedule"],
            gender: "all",
            ageRange: "18-25",
            diagnosis: ["Depression og bipolar lidelse"],
            center: "Psykiatrisk Center København"
        },
        {
            id: 2,
            title: "Mindfulness for Anxiety Disorders",
            description: "Clinical trial testing a new mindfulness approach for managing anxiety disorders.",
            type: "clinical",
            location: "Aarhus",
            duration: "6 months",
            startDate: "May 1, 2025",
            criteria: ["Anxiety diagnosis", "No psychotherapy", "Weekly sessions"],
            gender: "all",
            ageRange: "36-45",
            diagnosis: ["Stress og angst"],
            center: "Psykiatrisk Center Amager"
        },
        {
            id: 3,
            title: "Women's Mental Health Survey",
            description: "A comprehensive survey on women's mental health concerns, access to psychiatric care, and wellness practices.",
            type: "survey",
            location: "Online",
            duration: "1 hour",
            startDate: "Immediate",
            criteria: ["Female", "Mental health care access"],
            gender: "female",
            ageRange: "26-35",
            diagnosis: ["Ingen"],
            center: "Psykiatrisk Center Ballerup"
        },
        {
            id: 4,
            title: "Workplace Stress and Burnout Prevention",
            description: "Investigating the effectiveness of different stress management techniques in preventing workplace burnout.",
            type: "observational",
            location: "Odense",
            duration: "8 weeks",
            startDate: "April 20, 2025",
            criteria: ["Full-time employed", "Office worker", "Self-reported stress"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["Stress og angst"],
            center: "Psykiatrisk Center Glostrup"
        },
        {
            id: 5,
            title: "PTSD Treatment Innovation",
            description: "Study on novel therapeutic approaches for post-traumatic stress disorder in middle-aged men.",
            type: "clinical",
            location: "Aalborg",
            duration: "3 months",
            startDate: "June 1, 2025",
            criteria: ["Male", "PTSD diagnosis", "No current therapy"],
            gender: "male",
            ageRange: "46+",
            diagnosis: ["Psykose, skizofreni og skizotypi"],
            center: "Psykiatrisk Center Sct. Hans"
        },
        {
            id: 6,
            title: "Digital Tech and Mental Wellbeing",
            description: "Survey on digital device usage and its impact on mental health and psychological wellbeing.",
            type: "survey",
            location: "Online",
            duration: "30 minutes",
            startDate: "Immediate",
            criteria: ["Smartphone user", "Social media user"],
            gender: "all",
            ageRange: "18-25",
            diagnosis: ["Ingen"],
            center: "Psykiatrisk Center Stolpegård"
        }
    ];
    
    // Check if projects grid exists (only on home page)
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        const genderFilter = document.getElementById('genderFilter');
        const ageFilter = document.getElementById('ageFilter');
        const typeFilter = document.getElementById('typeFilter');
        const diagnosisFilter = document.getElementById('diagnosisFilter');
        const centerFilter = document.getElementById('centerFilter');
        
        // Function to check if a filter is active (not set to 'all')
        function isFilterActive(filter) {
            return filter.value !== 'all';
        }
        
        // Function to update filter visual state
        function updateFilterStyles() {
            // Update gender filter style
            if (isFilterActive(genderFilter)) {
                genderFilter.classList.add('filter-active');
            } else {
                genderFilter.classList.remove('filter-active');
            }
            
            // Update age filter style
            if (isFilterActive(ageFilter)) {
                ageFilter.classList.add('filter-active');
            } else {
                ageFilter.classList.remove('filter-active');
            }
            
            // Update type filter style
            if (isFilterActive(typeFilter)) {
                typeFilter.classList.add('filter-active');
            } else {
                typeFilter.classList.remove('filter-active');
            }
            
            // Update diagnosis filter style
            if (isFilterActive(diagnosisFilter)) {
                diagnosisFilter.classList.add('filter-active');
            } else {
                diagnosisFilter.classList.remove('filter-active');
            }
            
            // Update center filter style
            if (isFilterActive(centerFilter)) {
                centerFilter.classList.add('filter-active');
            } else {
                centerFilter.classList.remove('filter-active');
            }
        }
        
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
                        </div>
                        <a href="/Public/HTML/project-detail.html?id=${project.id}" class="project-link">View Project</a>
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
            const diagnosisValue = diagnosisFilter.value;
            const centerValue = centerFilter.value;
            
            // Update the visual state of filters
            updateFilterStyles();

            const filteredProjects = mockProjects.filter(project => {
                // Filter by gender
                if (genderValue !== 'all' && project.gender !== genderValue && project.gender !== 'all') {
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

                // Filter by diagnosis
                if (diagnosisValue !== 'all' && !project.diagnosis.includes(diagnosisValue)) {
                    return false;
                }

                // Filter by psychiatric center
                if (centerValue !== 'all' && project.center !== centerValue) {
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
        diagnosisFilter.addEventListener('change', filterProjects);
        centerFilter.addEventListener('change', filterProjects);
        
        // Clear filters functionality
        const clearFiltersButton = document.getElementById('clearFiltersButton');
        clearFiltersButton.addEventListener('click', () => {
            genderFilter.value = 'all';
            ageFilter.value = 'all';
            typeFilter.value = 'all';
            diagnosisFilter.value = 'all';
            centerFilter.value = 'all';
            
            // Update the visual state of filters
            updateFilterStyles();
            
            filterProjects();
        });

        // Initial render
        renderProjects(mockProjects);
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