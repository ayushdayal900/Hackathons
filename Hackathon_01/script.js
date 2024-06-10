// script.js
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Dummy validation for demonstration
  if (username === 'user' && password === 'password') {
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('logout-container').style.display = 'block';
      document.getElementById('user').innerText = username;
  } else {
      alert('Invalid username or password');
  }
});

document.getElementById('logout-button').addEventListener('click', function() {
  document.getElementById('logout-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
});
