const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

fetch("http://127.0.0.1:50403/login", {
  method: "POST",
})
  .then((response) => {
  })
  .catch((error) => {
    console.error("Error:", error);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let users = [];

app.post("/login",... (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.send("Login successful!");
  } else {
    res.status(401).send("Invalid credentials. Please try again.");
  }
});

app.post("/register", (req, res) => {
  const { email, username, password } = req.body;
  users.push({ email, username, password });
  res.redirect("/registered");
});

app.listen(PORT, () => {
  alert.apply(`Server is running on http://localhost:${PORT}`);
});
