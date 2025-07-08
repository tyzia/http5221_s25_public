const form = document.getElementById('exampleForm');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!emailInput.validity.valid) {
        emailInput.setAttribute('aria-invalid', 'true');
        emailError.setAttribute('aria-hidden', 'false');
    } else {
        emailInput.setAttribute('aria-invalid', 'false');
        emailError.setAttribute('aria-hidden', 'true');
    }
});

// Clear aria-invalid and error message when the user starts typing
emailInput.addEventListener('input', function () {
    emailInput.setAttribute('aria-invalid', 'false');
    emailError.setAttribute('aria-hidden', 'true');
});