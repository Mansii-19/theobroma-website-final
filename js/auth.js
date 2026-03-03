document.addEventListener("DOMContentLoaded", function () {

  // ================= SIGNUP =================
  const signupForm = document.getElementById("signupForm");
  const signupMsg = document.getElementById("signupMsg");

  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!name || !email || !password) {
        signupMsg.style.color = "red";
        signupMsg.innerText = "All fields are required!";
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (users.find(u => u.email === email)) {
        signupMsg.style.color = "red";
        signupMsg.innerText = "Email already registered!";
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ name, email })
      );

      signupMsg.style.color = "green";
      signupMsg.innerText = "Signup successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1000);
    });
  }

  // ================= LOGIN =================
  const loginForm = document.getElementById("loginForm");
  const loginMsg = document.getElementById("loginMsg");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      if (!email || !password) {
        loginMsg.style.color = "red";
        loginMsg.innerText = "Email and password required!";
        return;
      }

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        u => u.email === email && u.password === password
      );

      if (!user) {
        loginMsg.style.color = "red";
        loginMsg.innerText = "Incorrect email or password!";
        return;
      }

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ name: user.name, email: user.email })
      );

      loginMsg.style.color = "green";
      loginMsg.innerText = "Login successful! Redirecting...";

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1000);
    });
  }

  // ================= BUTTON CONTROL (INDEX PAGE) =================

  const loggedInUser = localStorage.getItem("loggedInUser");

  // Bottom buttons (with IDs)
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const logoutBtn = document.getElementById("logoutBtn");

  // Navbar buttons (with class)
  const navLoginBtn = document.querySelector(".login-btn");
  const navSignupBtn = document.querySelector(".signup-btn");

  if (loggedInUser) {
    if (loginBtn) loginBtn.style.display = "none";
    if (signupBtn) signupBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";

    if (navLoginBtn) navLoginBtn.style.display = "none";
    if (navSignupBtn) navSignupBtn.style.display = "none";
  } else {
    if (loginBtn) loginBtn.style.display = "inline-block";
    if (signupBtn) signupBtn.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";

    if (navLoginBtn) navLoginBtn.style.display = "inline-block";
    if (navSignupBtn) navSignupBtn.style.display = "inline-block";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      window.location.reload();
    });
  }

});
