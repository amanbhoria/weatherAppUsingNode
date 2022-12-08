const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;

// This is a built-in middleware function in Express. It serves static files and is based on serve-static.
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
