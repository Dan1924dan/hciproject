// LOGOUT BUTTON 
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout');
  
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault(); 
  
        alert('You have been logged out.');
        window.location.href = 'signup.html';
    });
});




















  