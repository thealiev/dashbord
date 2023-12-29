function showRegisterForm() {
  const loginContainer = document.querySelector(".container");
  const registerContainer = document.querySelector(".register-container");

  loginContainer.style.display = "none";
  registerContainer.style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `email=${email}&password=${password}`,
    });

    if (response.ok) {
      window.location.href = "/dashboard";
    } else {
      const errorMessage = await response.text();
      document.getElementById("errorMessage").textContent = errorMessage;
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${email}&username=${username}&password=${password}`,
      });

      if (response.redirected) {
        window.location.href = "/registered";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
