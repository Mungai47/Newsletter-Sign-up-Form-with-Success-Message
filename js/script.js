document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitBtn");
    const emailInput = document.getElementById("email");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value;
        if (validateEmail(email)) {
            // Redirect to another page if email is valid
            window.location.href = "success.html";
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        // A basic email validation function
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});