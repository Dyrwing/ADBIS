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
        },
        {
            id: 7,
            title: "Cognitive Behavioral Therapy for OCD",
            description: "Evaluating a modified CBT protocol specifically designed for adults with treatment-resistant OCD.",
            type: "clinical",
            location: "Copenhagen",
            duration: "12 weeks",
            startDate: "June 15, 2025",
            criteria: ["OCD diagnosis", "Previous therapy experience", "Ages 25-55"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["AD(H)D, OCD og Tourette"],
            center: "Psykiatrisk Center København"
        },
        {
            id: 8,
            title: "Technology-Assisted Therapy for Adolescents",
            description: "Testing a new app-based intervention to supplement traditional therapy for teens with anxiety and depression.",
            type: "clinical",
            location: "Online + Odense",
            duration: "16 weeks",
            startDate: "May 10, 2025",
            criteria: ["Ages 13-18", "Anxiety or depression", "Smartphone access"],
            gender: "all",
            ageRange: "18-25",
            diagnosis: ["Depression og bipolar lidelse", "Stress og angst"],
            center: "Børne- og Ungdomspsykiatrisk Center"
        },
        {
            id: 9,
            title: "Neurofeedback Training for ADHD",
            description: "Examining the efficacy of neurofeedback training in adults with ADHD who prefer non-medication approaches.",
            type: "clinical",
            location: "Aalborg",
            duration: "10 weeks",
            startDate: "July 5, 2025",
            criteria: ["ADHD diagnosis", "Age 21-40", "No stimulant medications"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["AD(H)D, OCD og Tourette"],
            center: "Psykiatrisk Center Nordsjælland"
        },
        {
            id: 10,
            title: "Autistic Adults Social Skills Groups",
            description: "Research on the effectiveness of peer-led social skills groups for autistic adults.",
            type: "observational",
            location: "Copenhagen",
            duration: "6 months",
            startDate: "June 1, 2025",
            criteria: ["Autism diagnosis", "Age 18+", "Interest in social skills development"],
            gender: "all",
            ageRange: "18-25",
            diagnosis: ["Autisme"],
            center: "Psykiatrisk Center Ballerup"
        },
        {
            id: 11,
            title: "Bipolar Disorder Sleep Patterns",
            description: "Investigating the relationship between sleep patterns and mood stability in people with bipolar disorder.",
            type: "observational",
            location: "Aarhus",
            duration: "3 months",
            startDate: "May 15, 2025",
            criteria: ["Bipolar I or II diagnosis", "Not in acute episode", "No sleep disorders"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["Depression og bipolar lidelse"],
            center: "Psykiatrisk Center Amager"
        },
        {
            id: 12,
            title: "Trauma-Focused Yoga for PTSD",
            description: "Examining the benefits of trauma-sensitive yoga practices for women with PTSD from domestic violence.",
            type: "clinical",
            location: "Odense",
            duration: "8 weeks",
            startDate: "July 10, 2025",
            criteria: ["Female", "PTSD diagnosis", "History of domestic violence", "No active substance use"],
            gender: "female",
            ageRange: "26-35",
            diagnosis: ["Psykose, skizofreni og skizotypi", "Stress og angst"],
            center: "Psykiatrisk Center Glostrup"
        },
        {
            id: 13,
            title: "Men's Mental Health Attitudes",
            description: "Survey exploring attitudes toward mental health services among men of different age groups and backgrounds.",
            type: "survey",
            location: "Online",
            duration: "20 minutes",
            startDate: "Immediate",
            criteria: ["Male", "Age 18+", "Danish resident"],
            gender: "male",
            ageRange: "all",
            diagnosis: ["Ingen"],
            center: "Psykiatrisk Center Sct. Hans"
        },
        {
            id: 14,
            title: "Recovery Narratives in Schizophrenia",
            description: "Qualitative study examining personal narratives of recovery in people with schizophrenia spectrum disorders.",
            type: "observational",
            location: "Copenhagen",
            duration: "2 interviews (2 hours each)",
            startDate: "June 20, 2025",
            criteria: ["Schizophrenia spectrum diagnosis", "In stable recovery for 1+ years"],
            gender: "all",
            ageRange: "36-45",
            diagnosis: ["Psykose, skizofreni og skizotypi"],
            center: "Psykiatrisk Center København"
        },
        {
            id: 15,
            title: "Mindfulness for Teen Eating Disorders",
            description: "Testing a mindfulness-based intervention for adolescents with eating disorders.",
            type: "clinical",
            location: "Aarhus",
            duration: "10 weeks",
            startDate: "August 5, 2025",
            criteria: ["Ages 14-18", "Eating disorder diagnosis", "Medically stable"],
            gender: "all",
            ageRange: "18-25",
            diagnosis: ["Spiseforstyrrelse"],
            center: "Børne- og Ungdomspsykiatrisk Center"
        },
        {
            id: 16,
            title: "Digital Mental Health Access in Rural Communities",
            description: "Survey on barriers to accessing digital mental health services in rural Danish communities.",
            type: "survey",
            location: "Online",
            duration: "25 minutes",
            startDate: "Immediate",
            criteria: ["Rural resident", "Age 18+", "With or without mental health conditions"],
            gender: "all",
            ageRange: "all",
            diagnosis: ["Ingen"],
            center: "Psykiatrisk Center Bornholm"
        },
        {
            id: 17,
            title: "Substance Use and Anxiety Treatment",
            description: "Investigating integrated treatment approaches for co-occurring substance use and anxiety disorders.",
            type: "clinical",
            location: "Copenhagen",
            duration: "14 weeks",
            startDate: "July 1, 2025",
            criteria: ["Anxiety diagnosis", "History of substance use", "Currently abstinent (min. 30 days)"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["Psykisk sygdom som følge af misbrug", "Stress og angst"],
            center: "Psykiatrisk Center Stolpegård"
        },
        {
            id: 18,
            title: "Virtual Reality Exposure for Phobias",
            description: "Testing the effectiveness of VR exposure therapy for specific phobias in older adults.",
            type: "clinical",
            location: "Aalborg",
            duration: "6 weeks",
            startDate: "June 10, 2025",
            criteria: ["Age 55+", "Specific phobia diagnosis", "No cardiovascular conditions"],
            gender: "all",
            ageRange: "46+",
            diagnosis: ["Stress og angst"],
            center: "Psykiatrisk Center Nordsjælland"
        },
        {
            id: 19,
            title: "Brain Injury and Mood Changes",
            description: "Research examining the relationship between traumatic brain injury and subsequent mood disorders.",
            type: "observational",
            location: "Odense",
            duration: "Single 3-hour assessment",
            startDate: "Ongoing",
            criteria: ["History of traumatic brain injury", "1+ years post-injury", "Age 25-65"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["Hjerneskade", "Depression og bipolar lidelse"],
            center: "Psykiatrisk Center Glostrup"
        },
        {
            id: 20,
            title: "Personality Disorders and Relationship Patterns",
            description: "Study on interpersonal relationship patterns among individuals with different personality disorder diagnoses.",
            type: "observational",
            location: "Copenhagen",
            duration: "4 interviews over 2 months",
            startDate: "July 15, 2025",
            criteria: ["Personality disorder diagnosis", "Currently in treatment", "Age 25-50"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["Personlighedsforstyrrelse og selvskade"],
            center: "Psykiatrisk Center Stolpegård"
        },
        {
            id: 21,
            title: "Music Therapy for Adult ADHD",
            description: "Pilot study exploring music therapy's effects on executive functioning in adults with ADHD.",
            type: "clinical",
            location: "Aarhus",
            duration: "8 weeks",
            startDate: "August 15, 2025",
            criteria: ["ADHD diagnosis", "Age 21-40", "No musical training required"],
            gender: "all",
            ageRange: "26-35",
            diagnosis: ["AD(H)D, OCD og Tourette"],
            center: "Psykiatrisk Center Amager"
        }
    ];
    
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
                    filterProjects();
                });
            });
        });
        
        // Function to render projects
        function renderProjects(projects) {
            projectsGrid.innerHTML = '';
            
            if (projects.length === 0) {
                projectsGrid.innerHTML = '<p class="no-results">No matching projects found. Try adjusting your filters.</p>';
                resultsCount.textContent = 'No results';
                return;
            }
            
            resultsCount.textContent = `${projects.length} project${projects.length !== 1 ? 's' : ''} found`;
            
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
                
                // Remove filtering class to complete animation
                projectsGrid.classList.remove('filtering');
            }, 200);
        }
        
        // Function to filter projects
        function filterProjects() {
            const filteredProjects = mockProjects.filter(project => {
                // Filter by gender - updated for multiple selections
                if (filterValues.gender.length > 0) {
                    // Check if project gender matches any selected gender or is 'all'
                    if (!filterValues.gender.includes(project.gender) && project.gender !== 'all') {
                        return false;
                    }
                }
                
                // Filter by age range - updated for multiple selections
                if (filterValues.age.length > 0 && !filterValues.age.includes(project.ageRange)) {
                    return false;
                }
                
                // Filter by study type - updated for multiple selections
                if (filterValues.type.length > 0 && !filterValues.type.includes(project.type)) {
                    return false;
                }
                
                // Filter by diagnosis - already handles multiple selections
                if (filterValues.diagnosis.length > 0) {
                    // Check if the project has at least one of the selected diagnoses
                    const hasMatchingDiagnosis = project.diagnosis.some(d => 
                        filterValues.diagnosis.includes(d)
                    );
                    
                    if (!hasMatchingDiagnosis) {
                        return false;
                    }
                }
                
                // Filter by psychiatric center - updated for multiple selections
                if (filterValues.center.length > 0 && !filterValues.center.includes(project.center)) {
                    return false;
                }
                
                return true;
            });
            
            renderProjects(filteredProjects);
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
            
            // Apply filters (show all)
            filterProjects();
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
        
        // Initial render
        filterProjects();
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