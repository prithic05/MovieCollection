let isLogin = false;
const users = {}; // Simple in-memory user store

const title = document.getElementById('form-title');
const message = document.getElementById('message');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const toggleBtn = document.getElementById('toggleBtn');
const formContainer = document.querySelector('.form-container');

function updateFormUI() {
  formContainer.style.opacity = 0;
  formContainer.style.transform = 'translateY(20px)';

  setTimeout(() => {
    title.textContent = isLogin ? 'Login' : 'Sign Up';
    submitBtn.textContent = isLogin ? 'Login' : 'Sign Up';
    toggleBtn.textContent = isLogin
      ? "Don't have an account? Sign Up"
      : "Already have an account? Login";

    message.textContent = '';
    username.value = '';
    password.value = '';

    formContainer.style.opacity = 1;
    formContainer.style.transform = 'translateY(0)';
  }, 300);
}

function handleSubmit() {
  const user = username.value.trim();
  const pass = password.value.trim();

  if (!user || !pass) {
    message.style.color = 'red';
    message.textContent = 'Please fill in all fields.';
    return;
  }

  if (isLogin) {
    if (users[user] && users[user] === pass) {
      message.style.color = 'green';
      message.textContent = 'Login successful!';
    } else {
      message.style.color = 'red';
      message.textContent = 'Invalid credentials.';
    }
  } else {
    if (users[user]) {
      message.style.color = 'red';
      message.textContent = 'Username already exists.';
    } else {
      users[user] = pass;
      message.style.color = 'green';
      message.textContent = 'Signup successful! Please login.';
    }
  }
}

toggleBtn.addEventListener('click', () => {
  isLogin = !isLogin;
  updateFormUI();
});

submitBtn.addEventListener('click', handleSubmit);
