const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

app.post("/save-dob", (req, res) => {
  const { dob } = req.body;

  if (!dob) {
    return res.status(400).json({ message: "DOB missing" });
  }

  const entry = `DOB: ${dob} | Date: ${new Date().toLocaleString()}\n`;

  fs.appendFile("dob.txt", entry, (err) => {
    if (err) {
      return res.status(500).json({ message: "Failed to save DOB" });
    }
    res.json({ message: "DOB saved successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
