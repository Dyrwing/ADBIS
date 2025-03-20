document.addEventListener('DOMContentLoaded', () => {
    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (!projectId) {
        window.location.href = '/Public/HTML/home.html';
        return;
    }
    
    // Project container
    const projectDetailContainer = document.getElementById('projectDetailContainer');
    
    // Mock projects data (this would normally come from a database)
    const mockProjects = [
        {
            id: 1,
            title: "Sleep Patterns in Depression",
            description: "This research aims to understand sleep patterns and their impact on cognitive function in individuals with depression.",
            fullDescription: "Sleep disruption is a common symptom of depression that can significantly impact quality of life and recovery. This research project investigates the relationship between sleep patterns and cognitive performance in adults aged 18-25 with mild to moderate depression. By collecting data on sleep habits, duration, and quality, alongside measures of cognitive function, memory, and attention, we hope to better understand how sleep impacts daily functioning in this population and develop more effective interventions.",
            type: "observational",
            location: "Copenhagen",
            duration: "4 weeks",
            startDate: "April 15, 2025",
            endDate: "May 13, 2025",
            criteria: ["18-25 years old", "Diagnosed with mild to moderate depression", "Not taking sleep medications", "No shift work"],
            gender: "all",
            ageRange: "18-25",
            institution: "Copenhagen University Hospital - Psychiatric Department",
            compensation: "500 DKK",
            researchLead: "Dr. Sofia Jensen",
            contactEmail: "depression.sleep.research@example.com",
            contactPhone: "+45 12 34 56 78",
            status: "Recruiting",
            participantsNeeded: 50,
            participantsEnrolled: 12,
            timeline: [
                {
                    title: "Initial Screening",
                    date: "Week 1",
                    description: "Completion of depression assessment, sleep quality questionnaires and eligibility screening."
                },
                {
                    title: "Sleep Monitoring",
                    date: "Weeks 1-4",
                    description: "Daily sleep tracking using provided wearable device and sleep diary."
                },
                {
                    title: "Cognitive Assessment",
                    date: "Weeks 1 and 4",
                    description: "Completion of cognitive tests to assess memory, attention, and processing speed."
                },
                {
                    title: "Follow-up Interview",
                    date: "Week 4",
                    description: "Final interview and return of monitoring equipment."
                }
            ],
            team: [
                {
                    name: "Dr. Sofia Jensen",
                    role: "Principal Investigator",
                    photo: "https://randomuser.me/api/portraits/women/45.jpg"
                },
                {
                    name: "Dr. Marcus Nielsen",
                    role: "Psychiatrist",
                    photo: "https://randomuser.me/api/portraits/men/32.jpg"
                },
                {
                    name: "Lena Schmidt",
                    role: "Research Coordinator",
                    photo: "https://randomuser.me/api/portraits/women/68.jpg"
                }
            ]
        },
        {
            id: 2,
            title: "Mindfulness for Anxiety Disorders",
            description: "Clinical trial testing a new mindfulness approach for managing anxiety disorders.",
            fullDescription: "Anxiety disorders are among the most common mental health conditions worldwide. This clinical trial evaluates the effectiveness of a novel mindfulness-based intervention program designed to reduce symptoms of generalized anxiety, social anxiety, and panic disorder. The intervention combines guided meditation, cognitive techniques, and behavioral strategies delivered through both in-person sessions and a mobile application.",
            type: "clinical",
            location: "Aarhus",
            duration: "6 months",
            startDate: "May 1, 2025",
            endDate: "November 1, 2025",
            criteria: ["Diagnosed with an anxiety disorder", "Not currently in psychotherapy", "No significant comorbid conditions", "Able to attend weekly sessions"],
            gender: "all",
            ageRange: "36-45",
            institution: "Aarhus University Hospital - Psychiatric Research Unit",
            compensation: "2500 DKK",
            researchLead: "Dr. Lars Petersen",
            contactEmail: "anxiety.mindfulness@example.com",
            contactPhone: "+45 23 45 67 89",
            status: "Recruiting",
            participantsNeeded: 120,
            participantsEnrolled: 43,
            timeline: [
                {
                    title: "Screening Visit",
                    date: "Week 1",
                    description: "Medical history review, anxiety assessment, and eligibility evaluation."
                },
                {
                    title: "Baseline Assessment",
                    date: "Week 2",
                    description: "Comprehensive psychological evaluation including anxiety measures and quality of life indicators."
                },
                {
                    title: "Intervention Phase",
                    date: "Weeks 2-26",
                    description: "Weekly mindfulness sessions, daily practice, and bi-weekly progress check-ins."
                },
                {
                    title: "Final Assessment",
                    date: "Week 26",
                    description: "Evaluation of mental health outcomes and program effectiveness."
                }
            ],
            team: [
                {
                    name: "Dr. Lars Petersen",
                    role: "Principal Investigator",
                    photo: "https://randomuser.me/api/portraits/men/22.jpg"
                },
                {
                    name: "Dr. Anna Sørensen",
                    role: "Clinical Psychologist",
                    photo: "https://randomuser.me/api/portraits/women/33.jpg"
                },
                {
                    name: "Thomas Berg",
                    role: "Mindfulness Instructor",
                    photo: "https://randomuser.me/api/portraits/men/41.jpg"
                }
            ]
        },
        {
            id: 3,
            title: "Women's Mental Health Survey",
            description: "A comprehensive survey on women's mental health concerns, access to psychiatric care, and wellness practices.",
            fullDescription: "This research project aims to collect data on women's mental health experiences, concerns, and healthcare access across different age groups and demographics. The survey covers topics including preventive mental healthcare practices, reproductive mental health, wellbeing, mood disorders, and satisfaction with psychiatric services. The findings will help inform mental healthcare policy and identify areas where women's psychiatric services could be improved.",
            type: "survey",
            location: "Online",
            duration: "1 hour",
            startDate: "Immediate",
            endDate: "Ongoing",
            criteria: ["Female identifying", "Regular access to mental healthcare", "Able to complete an online survey in English or Danish"],
            gender: "female",
            ageRange: "26-35",
            institution: "Danish Women's Mental Health Research Institute",
            compensation: "200 DKK gift card",
            researchLead: "Dr. Emma Larsen",
            contactEmail: "womens.mental.health.survey@example.com",
            contactPhone: "+45 34 56 78 90",
            status: "Open",
            participantsNeeded: 2000,
            participantsEnrolled: 543,
            timeline: [
                {
                    title: "Survey Completion",
                    date: "Single session",
                    description: "Complete the comprehensive online mental health survey (approx. 60 minutes)."
                },
                {
                    title: "Optional Follow-up",
                    date: "If selected",
                    description: "Some participants may be invited for a brief follow-up interview."
                }
            ],
            team: [
                {
                    name: "Dr. Emma Larsen",
                    role: "Principal Investigator",
                    photo: "https://randomuser.me/api/portraits/women/28.jpg"
                },
                {
                    name: "Dr. Sofia Andersen",
                    role: "Women's Mental Health Specialist",
                    photo: "https://randomuser.me/api/portraits/women/53.jpg"
                },
                {
                    name: "Maria Poulsen",
                    role: "Research Analyst",
                    photo: "https://randomuser.me/api/portraits/women/79.jpg"
                }
            ]
        },
        {
            id: 4,
            title: "Workplace Stress and Burnout Prevention",
            description: "Investigating the effectiveness of different stress management techniques in preventing workplace burnout.",
            fullDescription: "Work-related stress and burnout affect mental health, productivity, and quality of life for many professionals. This study evaluates the impact of three different mental health interventions in office environments: mindfulness meditation, cognitive behavioral techniques, and resilience training. Participants will be randomly assigned to one intervention and will practice the technique for 8 weeks, with regular assessments of stress levels, burnout indicators, and psychological wellbeing.",
            type: "observational",
            location: "Odense",
            duration: "8 weeks",
            startDate: "April 20, 2025",
            endDate: "June 15, 2025",
            criteria: ["Full-time employed in office environment", "Self-reported workplace stress", "No current psychiatric treatment", "Willingness to practice assigned technique"],
            gender: "all",
            ageRange: "26-35",
            institution: "University of Southern Denmark - Department of Occupational Psychiatry",
            compensation: "1000 DKK",
            researchLead: "Dr. Mikkel Rasmussen",
            contactEmail: "workplace.burnout@example.com",
            contactPhone: "+45 45 67 89 01",
            status: "Recruiting",
            participantsNeeded: 90,
            participantsEnrolled: 27,
            timeline: [
                {
                    title: "Initial Assessment",
                    date: "Week 1",
                    description: "Baseline stress measures, burnout assessment, and mental health screening."
                },
                {
                    title: "Intervention Assignment",
                    date: "Week 1",
                    description: "Random assignment to one of three stress management techniques."
                },
                {
                    title: "Practice Period",
                    date: "Weeks 1-8",
                    description: "Daily practice of assigned technique with weekly progress tracking."
                },
                {
                    title: "Final Assessment",
                    date: "Week 8",
                    description: "Post-intervention stress measures and psychological wellbeing assessment."
                }
            ],
            team: [
                {
                    name: "Dr. Mikkel Rasmussen",
                    role: "Principal Investigator",
                    photo: "https://randomuser.me/api/portraits/men/67.jpg"
                },
                {
                    name: "Dr. Louise Thomsen",
                    role: "Occupational Psychiatrist",
                    photo: "https://randomuser.me/api/portraits/women/42.jpg"
                },
                {
                    name: "Jonas Eriksen",
                    role: "Research Assistant",
                    photo: "https://randomuser.me/api/portraits/men/55.jpg"
                }
            ]
        },
        {
            id: 5,
            title: "PTSD Treatment Innovation",
            description: "Study on novel therapeutic approaches for post-traumatic stress disorder in middle-aged men.",
            fullDescription: "This research project examines the effectiveness of a new therapeutic approach for treating PTSD in men aged 46 and older. The study will combine traditional cognitive processing therapy with innovative virtual reality exposure techniques, and assess their impact on PTSD symptoms, sleep quality, and overall mental wellbeing. The goal is to identify more effective treatments for this demographic that often faces barriers to seeking and continuing mental health care.",
            type: "clinical",
            location: "Aalborg",
            duration: "3 months",
            startDate: "June 1, 2025",
            endDate: "September 1, 2025",
            criteria: ["Male", "Age 46 or older", "PTSD diagnosis", "Not currently in trauma-focused therapy", "No active substance use disorder"],
            gender: "male",
            ageRange: "46+",
            institution: "Aalborg University Hospital - Trauma Research Center",
            compensation: "1500 DKK",
            researchLead: "Dr. Anders Nielsen",
            contactEmail: "ptsd.treatment@example.com",
            contactPhone: "+45 56 78 90 12",
            status: "Recruiting",
            participantsNeeded: 150,
            participantsEnrolled: 42,
            timeline: [
                {
                    title: "Initial Assessment",
                    date: "Week 1",
                    description: "Comprehensive PTSD evaluation and eligibility assessment."
                },
                {
                    title: "Treatment Period",
                    date: "Weeks 1-12",
                    description: "Weekly therapy sessions combining traditional and VR-based approaches."
                },
                {
                    title: "Mid-point Check",
                    date: "Week 6",
                    description: "Brief follow-up assessment and treatment protocol adjustment if needed."
                },
                {
                    title: "Final Evaluation",
                    date: "Week 12",
                    description: "Comprehensive final assessment and review of symptomatic changes."
                }
            ],
            team: [
                {
                    name: "Dr. Anders Nielsen",
                    role: "Principal Investigator",
                    photo: "https://randomuser.me/api/portraits/men/76.jpg"
                },
                {
                    name: "Dr. Henrik Jensen",
                    role: "Trauma Specialist",
                    photo: "https://randomuser.me/api/portraits/men/15.jpg"
                },
                {
                    name: "Kristian Møller",
                    role: "VR Therapy Technician",
                    photo: "https://randomuser.me/api/portraits/men/37.jpg"
                }
            ]
        },
        {
            id: 6,
            title: "Digital Tech and Mental Wellbeing",
            description: "Survey on digital device usage and its impact on mental health and psychological wellbeing.",
            fullDescription: "This survey-based study investigates the relationship between digital technology usage patterns and various aspects of mental wellbeing. Participants will complete a comprehensive survey about their device usage habits, social media engagement, online activities, and perceived impacts on their mental health, mood regulation, anxiety levels, and social connections. The research aims to identify both positive and negative correlations between digital behaviors and psychological outcomes.",
            type: "survey",
            location: "Online",
            duration: "30 minutes",
            startDate: "Immediate",
            endDate: "Ongoing",
            criteria: ["Regular smartphone and/or computer user", "Active on at least one social media platform", "Can complete online survey in English or Danish"],
            gender: "all",
            ageRange: "18-25",
            institution: "Digital Mental Health Research Center",
            compensation: "Entry into prize draw (10 x 500 DKK)",
            researchLead: "Dr. Nanna Christensen",
            contactEmail: "digital.mental.health@example.com",
            contactPhone: "+45 67 89 01 23",
            status: "Open",
            participantsNeeded: 1000,
            participantsEnrolled: 278,
            timeline: [
                {
                    title: "Survey Completion",
                    date: "Single session",
                    description: "Complete the comprehensive online survey about digital habits and mental wellbeing (approx. 30 minutes)."
                },
                {
                    title: "Optional Follow-up",
                    date: "If selected",
                    description: "Some participants may be invited for a follow-up survey in 6 months."
                }
            ],
            team: [
                {
                    name: "Dr. Nanna Christensen",
                    role: "Principal Investigator",
                    photo: "https://randomuser.me/api/portraits/women/63.jpg"
                },
                {
                    name: "Dr. Simon Hansen",
                    role: "Digital Behavior Specialist",
                    photo: "https://randomuser.me/api/portraits/men/24.jpg"
                },
                {
                    name: "Julie Fischer",
                    role: "Research Coordinator",
                    photo: "https://randomuser.me/api/portraits/women/10.jpg"
                }
            ]
        }
    ];
    
    // Find the project by ID
    const project = mockProjects.find(p => p.id === parseInt(projectId));
    
    if (!project) {
        projectDetailContainer.innerHTML = `
            <div class="error-message">
                <h2>Project Not Found</h2>
                <p>The project you're looking for doesn't exist or may have been removed.</p>
                <a href="/Public/HTML/home.html" class="back-button">Return to Projects</a>
            </div>
        `;
        return;
    }
    
    // Render project details
    projectDetailContainer.innerHTML = `
        <div class="project-header">
            <h1 class="project-title-large">${project.title}</h1>
            <span class="project-status">${project.status}</span>
            <p class="project-summary">${project.fullDescription}</p>
        </div>
        
        <div class="project-sections">
            <div class="project-main-info">
                <div class="criteria-box">
                    <h3 class="section-title">Eligibility Criteria</h3>
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
                    <h3 class="section-title">Study Timeline</h3>
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
                    <h3 class="section-title">Research Team</h3>
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
            
            <div class="project-side-info">
                <div class="details-box">
                    <h3 class="section-title">Study Details</h3>
                    <div class="detail-row">
                        <span class="detail-label">Type:</span>
                        <span class="detail-value">${project.type.charAt(0).toUpperCase() + project.type.slice(1)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">${project.location}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Duration:</span>
                        <span class="detail-value">${project.duration}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Start Date:</span>
                        <span class="detail-value">${project.startDate}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Gender:</span>
                        <span class="detail-value">${project.gender === 'all' ? 'All genders' : (project.gender === 'male' ? 'Male' : 'Female')}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Age Range:</span>
                        <span class="detail-value">${project.ageRange}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Compensation:</span>
                        <span class="detail-value">${project.compensation}</span>
                    </div>
                </div>
                
                <div class="details-box">
                    <h3 class="section-title">Contact Information</h3>
                    <div class="detail-row">
                        <span class="detail-label">Institution:</span>
                        <span class="detail-value">${project.institution}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Lead Researcher:</span>
                        <span class="detail-value">${project.researchLead}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Email:</span>
                        <span class="detail-value">${project.contactEmail}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Phone:</span>
                        <span class="detail-value">${project.contactPhone}</span>
                    </div>
                </div>
                
                <div class="cta-box">
                    <p class="cta-text">Interested in participating?</p>
                    <a href="#" class="apply-button" id="interestFormButton">Express Interest</a>
                </div>
            </div>
        </div>
    `;
    
    // Interest form modal functionality
    const interestModal = document.getElementById('interestModal');
    const interestFormButton = document.getElementById('interestFormButton');
    const closeInterestModal = document.getElementById('closeInterestModal');
    const interestForm = document.getElementById('interestForm');
    
    interestFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        interestModal.classList.add('active');
    });
    
    closeInterestModal.addEventListener('click', () => {
        interestModal.classList.remove('active');
    });
    
    // Close interest modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === interestModal) {
            interestModal.classList.remove('active');
        }
    });
    
    // Handle interest form submission
    interestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('interestName').value;
        const email = document.getElementById('interestEmail').value;
        const phone = document.getElementById('interestPhone').value;
        const motivation = document.getElementById('interestMotivation').value;
        
        // In a real app, you would send this data to your server
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
    });
    
    // Set page title to project title
    document.title = `${project.title} - Region H Psykiatri: Psychiatric Research`;
});
