const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// STATS API
app.get("/stats", (req, res) => {
  res.json({
    totalUsers: 100,
    activeUsers: 80,
    inactiveUsers: 20,
    newUsers: 10
  });
});

// START SERVER
app.listen(8080, () => {
  console.log("Server running on port 8080");
});