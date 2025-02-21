import app from "./app.js";
import { connectDB } from "./config/database.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";


dotenv.config();

connectDB();

// Initialize Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "your_default_key_id",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "your_default_key_secret",
});

// Test route
app.get("/", (req, res) => {
  res.send("<h1>WORKING</h1>");
});


// Start server with a default port fallback
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${process.env.NODE_ENV || "development"} mode.`);
});
