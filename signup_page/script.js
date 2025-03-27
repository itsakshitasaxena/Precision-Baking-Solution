// Function to handle Signup Form Submission
function handleSignup(event) {
    event.preventDefault(); // Prevent form from submitting

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("Please fill in all fields!");
        return false;
    }

    // Simple password validation (at least 6 characters)
    if (password.value.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters long";
        return false;
    }

    // Save user data to local storage (can be replaced with an API call)
    localStorage.setItem("username", document.getElementById("name").value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    
    alert("Signup successful! Redirecting to login page...");
    window.location.href = "login.html"; // Redirect to login page
}

// Function to handle Login Form Submission
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    let enteredEmail = document.getElementById("email").value;
    let enteredPassword = document.getElementById("password").value;

    if (storedEmail === null || storedPassword === null) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (enteredEmail === storedEmail && storedPassword === password.value) {
        alert("Login Successful! Redirecting...");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid email or password!");
    }
}

// Attach event listeners when DOM loads
document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");
    let loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", handleSignup);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
    }
}
);
