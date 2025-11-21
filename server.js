require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require("./routes/authRoutes");
const providerRoutes = require("./routes/providerRoutes");
const jobRoutes = require("./routes/jobRoutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/jobs", jobRoutes);

// Database connection (FIXED)
const db = require("./models");

// Sync database
db.sequelize.sync().then(() => {
    console.log("Database connected & synchronized");
});

// Start server
app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});
