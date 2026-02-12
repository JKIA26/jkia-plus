import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    app: "JKia Plus Backend",
    version: "1.0.0"
  });
});

// Signup endpoint (database will come later)
app.post("/api/auth/signup", (req, res) => {
  const { fullName, email, password, role } = req.body;

  if (!fullName || !email || !password || !role) {
    return res.status(400).json({ message: "All fields are required." });
  }

  return res.status(201).json({
    message: "User registered successfully",
    user: {
      id: "USER_" + Date.now(),
      fullName,
      email,
      role
    }
  });
});

app.listen(PORT, () => {
  console.log(`JKia Plus server running on port ${PORT}`);
});
