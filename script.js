const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const submitButton = document.querySelector("button");
const eyeOpen = document.getElementById("eyeOpen")
const eyeClose = document.getElementById("eyeClose")

password.addEventListener("input", () => {
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    let strengthValue = '';
    let color = '';

    // Regex patterns for special characters, numbers, and uppercase letters
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordValue);
    const hasNumber = /\d/.test(passwordValue);
    const hasUppercase = /[A-Z]/.test(passwordValue);

    if (passwordLength === 0) {
        strengthValue = '';
    } else if (passwordLength < 5 || !hasSpecialChar || !hasNumber || !hasUppercase) {
        strengthValue = 'Weak';
        color = "#FF0000";
    } else if (passwordLength < 10) {
        strengthValue = 'Medium';
        color = "#FBFF00";
    } else if (passwordLength >= 10) {
        strengthValue = 'Strong';
        color = "#42FF00";
    }

    strength.innerHTML = `${strengthValue}`;
    message.style.display = "block";
    message.style.color = color;
});

submitButton.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    if (type === "password") {
        eyeClose.style.display = "inline";
        eyeOpen.style.display = "none";
    } else {
        eyeOpen.style.display = "inline";
        eyeClose.style.display = "none";
    }
});
