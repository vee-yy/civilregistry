<<<<<<< HEAD
function redirect(destination) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`;
  });

  setTimeout(() => {
    if (destination === 'user') {
      window.location.href = 'Loginweb/LoginPage.html';
    } else if (destination === 'admin') {
      window.location.href = 'AdminPortal/AdminLogin.html';
    }
  }, 500);
}
=======
function redirect(destination) {
  const buttons = document.querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Loading...`;
  });

  setTimeout(() => {
    if (destination === 'user') {
      window.location.href = 'Loginweb/LoginPage.html';
    } else if (destination === 'admin') {
      window.location.href = 'AdminPortal/AdminLogin.html';
    }
  }, 500);
}
>>>>>>> 47a295e805416a653b35b7079293e44ba9a7d251
