// JavaScript function to toggle the navigation menu

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Send form data to server (you can implement this using AJAX)
    alert('Your message has been sent!');
    // Clear form fields
    document.getElementById('contactForm').reset();
});