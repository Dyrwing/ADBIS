// Researcher Dashboard functionality

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    const token = localStorage.getItem('researcher_token') || sessionStorage.getItem('researcher_token');
    if (!token) {
        // Redirect to login if not authenticated
        window.location.href = '/HTML/researcher/login.html';
        return;
    }
    
    // Initialize dashboard components
    initUserMenu();
    initNavigation();
    loadProjects();
    loadRequests();
    initModals();
    
    // User menu dropdown functionality
    function initUserMenu() {
        const userMenuButton = document.getElementById('userMenuButton');
        const userDropdown = document.getElementById('userDropdown');
        const logoutButton = document.getElementById('logoutButton');
        const usernameDisplay = document.getElementById('usernameDisplay');
        
        // Set username from stored researcher info
        const researcherInfo = JSON.parse(localStorage.getItem('researcher_info') || sessionStorage.getItem('researcher_info') || '{}');
        if (researcherInfo.username) {
            usernameDisplay.textContent = researcherInfo.username;
        }
        
        // Toggle dropdown on click
        userMenuButton.addEventListener('click', function() {
            userDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!userMenuButton.contains(event.target) && !userDropdown.contains(event.target)) {
                userDropdown.classList.remove('active');
            }
        });
        
        // Handle logout
        logoutButton.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Clear stored tokens and info
            localStorage.removeItem('researcher_token');
            localStorage.removeItem('researcher_info');
            sessionStorage.removeItem('researcher_token');
            sessionStorage.removeItem('researcher_info');
            
            // Redirect to login page
            window.location.href = '/HTML/researcher/login.html';
        });
    }
    
    // Tab navigation functionality
    function initNavigation() {
        const navItems = document.querySelectorAll('.sidebar-nav .nav-item');
        const sections = document.querySelectorAll('.dashboard-section-content');
        
        navItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                
                // Get the target section from the href
                const targetId = this.getAttribute('href').substring(1);
                
                // Update active states
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
                
                // Show the selected section and hide others
                sections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === targetId) {
                        section.classList.add('active');
                    }
                });
            });
        });
    }
    
    // Load researcher's projects
    async function loadProjects() {
        const token = localStorage.getItem('researcher_token') || sessionStorage.getItem('researcher_token');
        const projectsList = document.getElementById('projectsList');
        const projectsLoading = document.getElementById('projectsLoading');
        const projectsError = document.getElementById('projectsError');
        const noProjectsMessage = document.getElementById('noProjectsMessage');
        const retryProjectsBtn = document.getElementById('retryProjectsBtn');
        const emptyStateNewProjectBtn = document.getElementById('emptyStateNewProjectBtn');
        
        // Show loading state
        projectsLoading.style.display = 'flex';
        projectsList.style.display = 'none';
        projectsError.style.display = 'none';
        noProjectsMessage.style.display = 'none';
        
        try {
            // Fetch projects from API
            const response = await fetch('/api/researchers/projects', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to load projects');
            }
            
            const projects = await response.json();
            
            // Hide loading state
            projectsLoading.style.display = 'none';
            
            // Show empty state if no projects
            if (!projects || projects.length === 0) {
                noProjectsMessage.style.display = 'flex';
                return;
            }
            
            // Render projects
            projectsList.innerHTML = '';
            projects.forEach(project => {
                projectsList.appendChild(createProjectCard(project));
            });
            
            // Show projects list
            projectsList.style.display = 'grid';
            
        } catch (error) {
            console.error('Error loading projects:', error);
            projectsLoading.style.display = 'none';
            projectsError.style.display = 'flex';
        }
        
        // Retry loading projects
        if (retryProjectsBtn) {
            retryProjectsBtn.addEventListener('click', loadProjects);
        }
        
        // Handle empty state new project button
        if (emptyStateNewProjectBtn) {
            emptyStateNewProjectBtn.addEventListener('click', function() {
                const newProjectModal = document.getElementById('newProjectModal');
                newProjectModal.classList.add('active');
            });
        }
    }
    
    // Create a project card element
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.dataset.id = project.id;
        
        const statusClass = getStatusClass(project.status);
        
        card.innerHTML = `
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    <div class="meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${project.location}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-calendar"></i>
                        <span>${project.startDate}</span>
                    </div>
                    <div class="meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${project.duration}</span>
                    </div>
                </div>
            </div>
            <div class="project-footer">
                <span class="project-status status-${statusClass}">${project.status || 'Pending'}</span>
                <button class="project-actions-button" data-project-id="${project.id}">
                    <span>Actions</span>
                    <i class="fas fa-ellipsis-v"></i>
                </button>
            </div>
        `;
        
        // Add event listener to actions button
        const actionsButton = card.querySelector('.project-actions-button');
        actionsButton.addEventListener('click', function() {
            showProjectActionsModal(project.id, project.title);
        });
        
        return card;
    }
    
    // Get CSS class for status
    function getStatusClass(status) {
        if (!status) return 'pending';
        
        const statusLower = status.toLowerCase();
        if (statusLower.includes('recruit')) return 'recruiting';
        if (statusLower.includes('active')) return 'active';
        if (statusLower.includes('complete')) return 'completed';
        if (statusLower.includes('hold')) return 'hold';
        return 'pending';
    }
    
    // Load researcher's project requests
    async function loadRequests() {
        const token = localStorage.getItem('researcher_token') || sessionStorage.getItem('researcher_token');
        const requestsList = document.getElementById('requestsList');
        const requestsLoading = document.getElementById('requestsLoading');
        const requestsError = document.getElementById('requestsError');
        const noRequestsMessage = document.getElementById('noRequestsMessage');
        const retryRequestsBtn = document.getElementById('retryRequestsBtn');
        
        // Show loading state
        requestsLoading.style.display = 'flex';
        requestsList.style.display = 'none';
        requestsError.style.display = 'none';
        noRequestsMessage.style.display = 'none';
        
        try {
            // Fetch requests from API
            const response = await fetch('/api/researchers/project-requests', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to load requests');
            }
            
            const requests = await response.json();
            
            // Hide loading state
            requestsLoading.style.display = 'none';
            
            // Show empty state if no requests
            if (!requests || requests.length === 0) {
                noRequestsMessage.style.display = 'flex';
                return;
            }
            
            // Render requests
            requestsList.innerHTML = '';
            requests.forEach(request => {
                requestsList.appendChild(createRequestItem(request));
            });
            
            // Show requests list
            requestsList.style.display = 'flex';
            
        } catch (error) {
            console.error('Error loading requests:', error);
            requestsLoading.style.display = 'none';
            requestsError.style.display = 'flex';
        }
        
        // Retry loading requests
        if (retryRequestsBtn) {
            retryRequestsBtn.addEventListener('click', loadRequests);
        }
    }
    
    // Create a request item element
    function createRequestItem(request) {
        const item = document.createElement('div');
        item.className = 'request-item';
        item.dataset.id = request.id;
        
        const requestData = typeof request.request_data === 'string' 
            ? JSON.parse(request.request_data) 
            : request.request_data;
        
        const projectTitle = request.project_title || (requestData.title ? requestData.title : 'New Project');
        const createdDate = new Date(request.created_at).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric'
        });
        
        item.innerHTML = `
            <div class="request-header">
                <h3 class="request-title">${projectTitle}</h3>
                <span class="request-type request-type-${request.request_type}">${request.request_type}</span>
            </div>
            <div class="request-details">
                ${getRequestDetails(request)}
            </div>
            <div class="request-meta">
                <div class="request-date">
                    <i class="far fa-clock"></i>
                    <span>Requested on ${createdDate}</span>
                </div>
                <span class="request-status status-${request.status}">${request.status}</span>
            </div>
        `;
        
        return item;
    }
    
    // Get formatted request details based on type
    function getRequestDetails(request) {
        const requestData = typeof request.request_data === 'string' 
            ? JSON.parse(request.request_data) 
            : request.request_data;
        
        switch (request.request_type) {
            case 'create':
                return `New project proposal: ${requestData.description || 'No description provided'}`;
            case 'edit':
                return 'Request to edit project details';
            case 'delete':
                return `Reason for deletion: ${requestData.reason || 'No reason provided'}`;
            default:
                return 'Project request';
        }
    }
    
    // Initialize modals and forms
    function initModals() {
        // New Project Modal
        const newProjectBtn = document.getElementById('newProjectBtn');
        const newProjectModal = document.getElementById('newProjectModal');
        const closeNewProjectModal = document.getElementById('closeNewProjectModal');
        const cancelNewProjectBtn = document.getElementById('cancelNewProjectBtn');
        const submitNewProjectBtn = document.getElementById('submitNewProjectBtn');
        const newProjectForm = document.getElementById('newProjectForm');
        const addCriterionBtn = document.getElementById('addCriterionBtn');
        
        // Project Actions Modal
        const projectActionsModal = document.getElementById('projectActionsModal');
        const closeProjectActionsModal = document.getElementById('closeProjectActionsModal');
        const requestEditBtn = document.getElementById('requestEditBtn');
        const requestDeleteBtn = document.getElementById('requestDeleteBtn');
        
        // Delete Request Modal
        const deleteRequestModal = document.getElementById('deleteRequestModal');
        const closeDeleteRequestModal = document.getElementById('closeDeleteRequestModal');
        const cancelDeleteRequestBtn = document.getElementById('cancelDeleteRequestBtn');
        const submitDeleteRequestBtn = document.getElementById('submitDeleteRequestBtn');
        const deleteRequestForm = document.getElementById('deleteRequestForm');
        
        // Current project being acted upon
        let currentProjectId = null;
        let currentProjectTitle = null;
        
        // Open new project modal
        if (newProjectBtn) {
            newProjectBtn.addEventListener('click', function() {
                newProjectModal.classList.add('active');
            });
        }
        
        // Close new project modal
        if (closeNewProjectModal) {
            closeNewProjectModal.addEventListener('click', function() {
                newProjectModal.classList.remove('active');
            });
        }
        
        // Cancel new project
        if (cancelNewProjectBtn) {
            cancelNewProjectBtn.addEventListener('click', function() {
                newProjectModal.classList.remove('active');
            });
        }
        
        // Add criterion field
        if (addCriterionBtn) {
            addCriterionBtn.addEventListener('click', function() {
                const criteriaList = document.querySelector('.criteria-list');
                const newCriterion = document.createElement('div');
                newCriterion.className = 'criteria-item';
                newCriterion.innerHTML = `
                    <input type="text" name="criteria[]" class="form-control" placeholder="Enter a criterion" required>
                    <button type="button" class="remove-criterion-btn"><i class="fas fa-times"></i></button>
                `;
                
                criteriaList.appendChild(newCriterion);
                
                // Add event listener to remove button
                const removeBtn = newCriterion.querySelector('.remove-criterion-btn');
                removeBtn.addEventListener('click', function() {
                    newCriterion.remove();
                });
            });
        }
        
        // Submit new project request
        if (submitNewProjectBtn && newProjectForm) {
            submitNewProjectBtn.addEventListener('click', async function() {
                // Validate form
                if (!validateForm(newProjectForm)) {
                    return;
                }
                
                // Get form data
                const formData = new FormData(newProjectForm);
                const projectData = {
                    title: formData.get('title'),
                    description: formData.get('description'),
                    fullDescription: formData.get('fullDescription'),
                    type: formData.get('type'),
                    location: formData.get('location'),
                    duration: formData.get('duration'),
                    startDate: formData.get('startDate'),
                    gender: formData.get('gender'),
                    ageRange: formData.get('ageRange'),
                    center: formData.get('center'),
                    criteria: Array.from(formData.getAll('criteria[]'))
                };
                
                try {
                    // Show loading state
                    submitNewProjectBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
                    submitNewProjectBtn.disabled = true;
                    
                    // Send request to API
                    const token = localStorage.getItem('researcher_token') || sessionStorage.getItem('researcher_token');
                    const response = await fetch('/api/researchers/project-requests', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({ projectData })
                    });
                    
                    const data = await response.json();
                    
                    if (!response.ok) {
                        throw new Error(data.error || 'Failed to submit request');
                    }
                    
                    // Close modal and reset form
                    newProjectModal.classList.remove('active');
                    newProjectForm.reset();
                    
                    // Reset button state
                    submitNewProjectBtn.innerHTML = 'Submit Request';
                    submitNewProjectBtn.disabled = false;
                    
                    // Reload requests to show the new one
                    loadRequests();
                    
                    // Show success notification
                    showNotification('Project request submitted successfully', 'success');
                    
                } catch (error) {
                    console.error('Error submitting project request:', error);
                    
                    // Reset button state
                    submitNewProjectBtn.innerHTML = 'Submit Request';
                    submitNewProjectBtn.disabled = false;
                    
                    // Show error notification
                    showNotification(error.message, 'error');
                }
            });
        }
        
        // Close project actions modal
        if (closeProjectActionsModal) {
            closeProjectActionsModal.addEventListener('click', function() {
                projectActionsModal.classList.remove('active');
            });
        }
        
        // Request edit button
        if (requestEditBtn) {
            requestEditBtn.addEventListener('click', function() {
                // This would typically open a form to edit the project
                // For now, we'll just show a notification
                projectActionsModal.classList.remove('active');
                showNotification('Edit feature will be implemented in a future update', 'info');
            });
        }
        
        // Request delete button
        if (requestDeleteBtn) {
            requestDeleteBtn.addEventListener('click', function() {
                projectActionsModal.classList.remove('active');
                deleteRequestModal.classList.add('active');
            });
        }
        
        // Close delete request modal
        if (closeDeleteRequestModal) {
            closeDeleteRequestModal.addEventListener('click', function() {
                deleteRequestModal.classList.remove('active');
            });
        }
        
        // Cancel delete request
        if (cancelDeleteRequestBtn) {
            cancelDeleteRequestBtn.addEventListener('click', function() {
                deleteRequestModal.classList.remove('active');
            });
        }
        
        // Submit delete request
        if (submitDeleteRequestBtn && deleteRequestForm) {
            submitDeleteRequestBtn.addEventListener('click', async function() {
                if (!currentProjectId) return;
                
                const reason = document.getElementById('deleteReason').value;
                
                if (!reason) {
                    showNotification('Please provide a reason for deletion', 'error');
                    return;
                }
                
                try {
                    // Show loading state
                    submitDeleteRequestBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
                    submitDeleteRequestBtn.disabled = true;
                    
                    // Send request to API
                    const token = localStorage.getItem('researcher_token') || sessionStorage.getItem('researcher_token');
                    const response = await fetch(`/api/researchers/project-requests/delete/${currentProjectId}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({ reason })
                    });
                    
                    const data = await response.json();
                    
                    if (!response.ok) {
                        throw new Error(data.error || 'Failed to submit deletion request');
                    }
                    
                    // Close modal and reset form
                    deleteRequestModal.classList.remove('active');
                    deleteRequestForm.reset();
                    
                    // Reset button state
                    submitDeleteRequestBtn.innerHTML = 'Submit Delete Request';
                    submitDeleteRequestBtn.disabled = false;
                    
                    // Reload requests to show the new one
                    loadRequests();
                    
                    // Show success notification
                    showNotification('Deletion request submitted successfully', 'success');
                    
                } catch (error) {
                    console.error('Error submitting deletion request:', error);
                    
                    // Reset button state
                    submitDeleteRequestBtn.innerHTML = 'Submit Delete Request';
                    submitDeleteRequestBtn.disabled = false;
                    
                    // Show error notification
                    showNotification(error.message, 'error');
                }
            });
        }
        
        // Show project actions modal
        window.showProjectActionsModal = function(projectId, projectTitle) {
            currentProjectId = projectId;
            currentProjectTitle = projectTitle;
            
            // Update modal title with project name
            const modalTitle = document.getElementById('projectActionsTitle');
            if (modalTitle && projectTitle) {
                modalTitle.textContent = `Actions for "${projectTitle}"`;
            }
            
            projectActionsModal.classList.add('active');
        };
    }
    
    // Validate form inputs
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('invalid');
                
                // Add invalid class and remove it on input
                input.addEventListener('input', function() {
                    if (this.value.trim()) {
                        this.classList.remove('invalid');
                    } else {
                        this.classList.add('invalid');
                    }
                });
            } else {
                input.classList.remove('invalid');
            }
        });
        
        if (!isValid) {
            showNotification('Please fill out all required fields', 'error');
        }
        
        return isValid;
    }
    
    // Show a notification message
    function showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${getIconForType(type)}"></i>
                <span>${message}</span>
            </div>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        // Add to document
        document.body.appendChild(notification);
        
        // Show with animation
        setTimeout(() => {
            notification.classList.add('active');
        }, 10);
        
        // Remove after timeout
        setTimeout(() => {
            notification.classList.remove('active');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 5000);
        
        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.classList.remove('active');
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
    }
    
    // Get icon class for notification type
    function getIconForType(type) {
        switch (type) {
            case 'success': return 'fa-check-circle';
            case 'error': return 'fa-exclamation-circle';
            case 'warning': return 'fa-exclamation-triangle';
            case 'info':
            default: return 'fa-info-circle';
        }
    }
});