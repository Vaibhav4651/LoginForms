const form = document.querySelector('.login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

form.addEventListener('submit', function (e) {
  let valid = true;

  // Email validation
  if (!emailInput.value || !validateEmail(emailInput.value)) {
    emailError.textContent = 'Please enter a valid email address';
    emailError.style.display = 'block';
    valid = false;
  } else {
    emailError.style.display = 'none';
  }

  // Password validation
  if (!passwordInput.value || passwordInput.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    passwordError.style.display = 'block';
    valid = false;
  } else {
    passwordError.style.display = 'none';
  }

  if (!valid) {
    e.preventDefault(); // Prevent form submission if validation fails
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}
