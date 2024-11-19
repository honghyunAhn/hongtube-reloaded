import express from "express";

const PORT = 4000;

const app = express();

const home = (req, res) => {
  console.log("I will respond.");
  return res.send("hello");
};

const login = (req, res) => {
  return res.send("login");
};

app.get("/", home);
app.get("/login", login);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
