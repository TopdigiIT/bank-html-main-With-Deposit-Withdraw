document.getElementById('submit-button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission if it's inside a form

    // Get User Email
    const userInput = document.getElementById("user-email");
    const userEmail = userInput.value.trim();

    // Get User Password
    const passwordInput = document.getElementById("user-password");
    const userPassword = passwordInput.value.trim();

    // Validate Login Data (Email & Password)
    if (userEmail === 'admin@gmail.com' && userPassword === '1234') {
        alert("Login Successful!");
        window.location.href = "https://topdigiit.github.io/bank-html-main-With-Deposit-Withdraw/banking.html"; // Redirect to the specified page
    } else {
        alert("User Name or Password is not valid");
    }
});
