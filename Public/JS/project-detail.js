document.addEventListener('DOMContentLoaded', () => {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (!projectId) {
        window.location.href = '/HTML/home.html';
        return;
    }
    
    // Project container
    const projectDetailContainer = document.getElementById('projectDetailContainer');
      // Show loading state
    projectDetailContainer.innerHTML = `
        <div class="project-detail-loading">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Indlæser projektdetaljer...</p>
        </div>
    `;
    
    // Fetch project details from API
    fetch(`/api/projects/${projectId}`)
        .then(response => {
            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('Project not found');
                }
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(project => {
            // Render project details
            renderProjectDetails(project);
            
            // Set up modal functionality
            setupModalFunctionality(project);
              // Set page title to project title
            document.title = `${project.title} - Region H Psykiatri: Psykiatrisk Forskning`;
        })
        .catch(error => {
            console.error('Error fetching project details:', error);
            
            if (error.message === 'Project not found') {                projectDetailContainer.innerHTML = `
                    <div class="error-message">
                        <h2>Projekt Ikke Fundet</h2>
                        <p>Det projekt, du leder efter, findes ikke, eller det kan være blevet fjernet.</p>
                        <a href="/HTML/home.html" class="back-button">Tilbage til Projekter</a>
                    </div>
                `;
            } else {
                projectDetailContainer.innerHTML = `                    <div class="error-message">
                        <h2>Fejl Ved Indlæsning af Projekt</h2>
                        <p>Der opstod et problem ved indlæsning af projektdetaljerne. Prøv venligst igen senere.</p>
                        <a href="/HTML/home.html" class="back-button">Tilbage til Projekter</a>
                    </div>
                `;
            }
        });
    
    // Function to render project details
    function renderProjectDetails(project) {
        projectDetailContainer.innerHTML = `
            <div class="project-header">
                <h1 class="project-title-large">${project.title}</h1>
                <span class="project-status">${project.status}</span>
                <p class="project-summary">${project.fullDescription}</p>
            </div>
            
            <div class="project-sections">
                <div class="project-main-info">                    <div class="criteria-box">
                        <h3 class="section-title">Deltagelseskriterier</h3>
                        <div class="criteria-grid">
                            ${project.criteria.map(criterion => `
                                <div class="criteria-item-large">
                                    <i class="fas fa-check-circle criteria-icon"></i>
                                    <span>${criterion}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                      <div class="info-section">
                        <h3 class="section-title">Studieforløb</h3>
                        <div class="section-content">
                            ${project.timeline.map((item, index, array) => `
                                <div class="timeline-item">
                                    <div class="timeline-marker">
                                        <div class="timeline-dot"></div>
                                        ${index < array.length - 1 ? '<div class="timeline-line"></div>' : ''}
                                    </div>
                                    <div class="timeline-content">
                                        <h4 class="timeline-title">${item.title}</h4>
                                        <div class="timeline-date">${item.date}</div>
                                        <p class="timeline-description">${item.description}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                      <div class="info-section">
                        <h3 class="section-title">Forskningsteam</h3>
                        <div class="section-content">
                            ${project.team.map(member => `
                                <div class="team-member">
                                    <img src="${member.photo}" alt="${member.name}" class="team-photo">
                                    <div class="team-info">
                                        <h4 class="team-name">${member.name}</h4>
                                        <p class="team-role">${member.role}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="project-side-info">                    <div class="details-box">
                        <h3 class="section-title">Studiedetaljer</h3>
                        <div class="detail-row">
                            <span class="detail-label">Type:</span>
                            <span class="detail-value">${project.type.charAt(0).toUpperCase() + project.type.slice(1)}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Lokation:</span>
                            <span class="detail-value">${project.location}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Varighed:</span>
                            <span class="detail-value">${project.duration}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Startdato:</span>
                            <span class="detail-value">${project.startDate}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Køn:</span>
                            <span class="detail-value">${project.gender === 'all' ? 'Alle køn' : (project.gender === 'male' ? 'Mand' : 'Kvinde')}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Aldersgruppe:</span>
                            <span class="detail-value">${project.ageRange}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Kompensation:</span>
                            <span class="detail-value">${project.compensation}</span>
                        </div>
                    </div>
                      <div class="details-box">
                        <h3 class="section-title">Kontaktoplysninger</h3>
                        <div class="detail-row">
                            <span class="detail-label">Institution:</span>
                            <span class="detail-value">${project.institution}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Forskningsleder:</span>
                            <span class="detail-value">${project.researchLead}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">E-mail:</span>
                            <span class="detail-value">${project.contactEmail}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">Telefon:</span>
                            <span class="detail-value">${project.contactPhone}</span>
                        </div>
                    </div>
                      <div class="cta-box">
                        <p class="cta-text">Interesseret i at deltage?</p>
                        <a href="#" class="apply-button" id="interestFormButton">Tilmeld interesse</a>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Function to set up modal functionality
    function setupModalFunctionality(project) {
        // Interest form modal functionality
        const interestModal = document.getElementById('interestModal');
        const interestFormButton = document.getElementById('interestFormButton');
        const closeInterestModal = document.getElementById('closeInterestModal');
        const interestForm = document.getElementById('interestForm');
        
        if (interestFormButton && interestModal) {
            interestFormButton.addEventListener('click', (e) => {
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
        
        // Handle interest form submission
        if (interestForm) {
            interestForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('interestName').value;
                const email = document.getElementById('interestEmail').value;
                const phone = document.getElementById('interestPhone').value;
                const motivation = document.getElementById('interestMotivation').value;
                
                // In a real app, you would send this data to your server
                // For now, we'll just log it and show a confirmation
                console.log('Interest submitted:', { 
                    projectId: project.id,
                    projectTitle: project.title,
                    name, 
                    email, 
                    phone,
                    motivation 
                });
                
                // Simulate successful submission
                alert('Your interest has been submitted successfully! The research team will contact you soon.');
                interestModal.classList.remove('active');
                
                // Reset form
                interestForm.reset();
            });
        }
    }
});
