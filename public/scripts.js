const registerForm = document.getElementById("register");
const registerMsg = document.getElementById("registerMsg");
const loginForm = document.getElementById("login");
const loginMsg = document.getElementById("loginMsg");

const BASE_URL = "/api/v1/auth";
const register = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const { msg, success, token } = await response.json();
    registerMsg.textContent = msg;
    if (success) {
      registerMsg.className = "success";
      localStorage.setItem("token", token);
      registerForm.reset();
    } else {
      registerMsg.className = "fail";
    }
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    setTimeout(() => {
      registerMsg.textContent = "";
      registerMsg.className = "";
    }, 3000);
  }
};
const login = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const { msg, success, token } = await response.json();
    loginMsg.textContent = msg;
    if (success) {
      loginMsg.className = "success";
      localStorage.setItem("token", token);
      loginForm.reset();
    } else {
      loginMsg.className = "fail";
    }
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    setTimeout(() => {
      loginMsg.textContent = "";
      loginMsg.className = "";
    }, 3000);
  }
};

registerForm.addEventListener("submit", register);
loginForm.addEventListener("submit", login);
