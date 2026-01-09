document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // Toggle the 'active' class on the navigation links to show/hide the menu
        navLinks.classList.toggle('active');
        
        // Toggle the 'active' class on the button to perform the X animation
        hamburger.classList.toggle('active');
    });
});