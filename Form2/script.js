function validateForm() {
    let isValid = true;
  
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
  
    // Clear previous errors
    usernameError.style.visibility = 'hidden';
    emailError.style.visibility = 'hidden';
    passwordError.style.visibility = 'hidden';
    confirmPasswordError.style.visibility = 'hidden';
  
    // Username validation
    if (username.value.length < 4) {
      usernameError.textContent = 'Username must be at least 4 characters long';
      usernameError.style.visibility = 'visible';
      isValid = false;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address';
      emailError.style.visibility = 'visible';
      isValid = false;
    }
  
    // Password validation
    if (password.value.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters long';
      passwordError.style.visibility = 'visible';
      isValid = false;
    }
  
    // Confirm Password validation
    if (password.value !== confirmPassword.value) {
      confirmPasswordError.textContent = 'Passwords do not match';
      confirmPasswordError.style.visibility = 'visible';
      isValid = false;
    }
  
    return isValid;
  }
  