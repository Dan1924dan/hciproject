document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  var message = document.getElementById('message');
  
  var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    message.textContent = 'Password must contain at least 8 characters with a mix of letters and numbers.';
    return;
  }


  if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match';
    return;
  }
  
  window.location.href = 'vons.html';
  message.textContent = 'Account created successfully';
});



var typingEffect = new Typed(".typedText",{
  strings : ["Von's Pizza House"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})



// Assume user has successfully logged in
var loggedIn = true;

if (loggedIn) {
    alert("Welcome! You have successfully logged in.");
} else {
    alert("Login failed. Please try again.");
}





document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  fetch('https://script.google.com/macros/s/AKfycbzD044Haga3QB_6l3tZ4g0UVSJNOW6ZG-k4HWdwRmLVVs1ChWO_UhPbyPO5HuwFTJL9-g/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    alert(data); // Show success message
    document.getElementById('myForm').reset(); // Clear form fields
  })
  .catch(error => console.error('Error:', error));
});



// Get the password input element and the show/hide button
const passwordInput = document.getElementById("password");
const showPasswordButton = document.getElementById("showPassword");

// Add event listener to the show/hide button
showPasswordButton.addEventListener("click", function() {
    // Toggle between password and text type
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPasswordButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        showPasswordButton.textContent = "Show";
    }
});
