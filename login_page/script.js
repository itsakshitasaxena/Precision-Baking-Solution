document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
            
        if (username === "admin" && password === "password") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password.");
        }
        });

        function openForgotPasswordModal() {
            document.getElementById("forgotPasswordModal").style.display = "block";
        }
        
        function resetPassword() {
            const email = document.getElementById("resetEmail").value;
            if (email) {
                alert("A password reset link has been sent to " + email);
                document.getElementById("forgotPasswordModal").style.display = "none";
            } else {
                alert("Please enter a valid email address.");
            }
        }
