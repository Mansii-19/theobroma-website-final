// Email & password validation helpers
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
  return passwordPattern.test(password);
}

// ---------------- SIGN UP ----------------
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

    if (!isValidEmail(email)) {
      signupMsg.style.color = "red";
      signupMsg.innerText = "Enter a valid email address!";
      return;
    }

    if (!isValidPassword(password)) {
      signupMsg.style.color = "red";
      signupMsg.innerText =
        "Password must be at least 6 characters and include a number.";
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

    // Auto login
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ name, email })
    );

    signupMsg.style.color = "green";
    signupMsg.innerText = "Signup successful!...";

    setTimeout(() => {
      window.location.href = "..html/index.html";
    }, 1000);
  });
}

// ---------------- LOGIN ----------------
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

    if (!isValidEmail(email)) {
      loginMsg.style.color = "red";
      loginMsg.innerText = "Invalid email format!";
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
    loginMsg.innerText = "Login successful!..";

    setTimeout(() => {
      window.location.href = "..html/index.html";
    }, 1000);
  });
}
