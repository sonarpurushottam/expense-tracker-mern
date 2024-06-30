import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js"; // Correctly importing db.js
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import incomeRoutes from "./routes/incomeRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Your middleware, routes, and other setups here

// Connect to the database
connectDB();

const PORT = process.env.PORT || 3000;
app.use("/api", userRoutes);
app.use("/api", expenseRoutes);
app.use("/api", incomeRoutes);
app.use("/api", categoryRoutes);
app.use("/api", adminRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
