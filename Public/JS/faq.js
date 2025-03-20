document.addEventListener('DOMContentLoaded', () => {
    // Get all FAQ question elements
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    // Add click event listener to each question
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Get parent item
            const faqItem = question.parentElement;
            
            // Check if this item is already active
            const isActive = faqItem.classList.contains('active');
            
            // Close all items (accordion style - only one open at a time)
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // If clicked item wasn't active before, make it active now
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
    
    // Update navigation menu active state
    const currentLocation = window.location.pathname;
    const navItems = document.querySelectorAll('.nav-menu .nav-item');
    
    navItems.forEach(item => {
        const itemPath = item.getAttribute('href');
        if (itemPath && currentLocation.includes(itemPath)) {
            item.classList.add('active');
        }
    });
});
