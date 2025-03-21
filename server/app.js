import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

// Initialize app
const app = express();
export default app;

// Load environment variables
dotenv.config({
  path: "./config/config.env",
});

// ✅ CORS Middleware - Allow All Origins
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Body parsers
app.use(express.json());
app.use(
  urlencoded({
    extended: true,
  })
);

// Trust proxy (for deployment)
app.set("trust proxy");

// ✅ Import Routes
import userRoute from "./routes/userRoute.js";
import orderRoute from "./routes/ordersRoute.js";
import getMyOrdersRoute from "./routes/ordersRoute.js";
import getOrderDetailsRoute from "./routes/ordersRoute.js";
import recommendationRoutes from "./routes/recommendationRoutes.js"; // ✅ Your recommendation route

// ✅ Use Routes
app.use("/api/v1", userRoute);
app.use("/api/v1", orderRoute);
app.use("/api/v1", getMyOrdersRoute);
app.use("/api/v1", getOrderDetailsRoute);
app.use("/api/v1/recommendations", recommendationRoutes); // ✅ Using recommendation route

// ✅ Error Handling Middleware
app.use(errorMiddleware);
