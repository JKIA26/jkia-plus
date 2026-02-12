// Change this later after backend deployment (Render)
const API_BASE_URL = "http://localhost:5000";

const signupForm = document.getElementById("signupForm");
const msg = document.getElementById("msg");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.textContent = "Creating account...";

  const payload = {
    fullName: document.getElementById("fullName").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
    role: document.getElementById("role").value,
  };

  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      msg.textContent = data.message || "Signup failed";
      return;
    }

    msg.textContent = `✅ Account created for ${data.user.fullName} (${data.user.role})`;
  } catch (err) {
    msg.textContent = "❌ Error connecting to backend";
  }
});
