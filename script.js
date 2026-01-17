// responsiv hamburger menue ------------------------------------->

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

// Last Update Date and Time in Card Section 3rd Card ------------------------------------->

function displayCurrentDateTime() {
    // Create a new Date object
    const currentDate = new Date();

    // Get the various components of the date and time
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are 0-indexed, so add 1
    const day = currentDate.getDate();
    // Time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Format the date and time string (example format: DD-MM-YYYY HH:MM:SS)
    // Add leading zeros if needed
    const formattedDateTime = 
        `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year} ` +
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    // Update the content of an HTML element with the ID 'datetime-display'
    document.getElementById('datetime-display').textContent = formattedDateTime;
}

// Call the function once to display the time immediately
displayCurrentDateTime();

// Optionally, call the function every second to update the time live
setInterval(displayCurrentDateTime, 1000);
