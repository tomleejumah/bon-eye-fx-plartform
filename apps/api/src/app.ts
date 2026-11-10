import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFoundHandler } from "./middleware/not-found.js";
import { healthRouter } from "./routes/health.routes.js";

export const app = express();
const allowedOrigins = env.WEB_ORIGIN.split(",").map((origin) => origin.trim());

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS."));
  },
  credentials: true
}));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use("/api", rateLimit({
  windowMs: env.API_RATE_LIMIT_WINDOW_MS,
  limit: env.API_RATE_LIMIT_MAX,
  standardHeaders: "draft-8",
  legacyHeaders: false
}));

app.get("/", (_req, res) => {
  res.json({ name: "Bon Eye FX API", version: "v1" });
});
app.use("/api/v1/health", healthRouter);
app.use(notFoundHandler);
app.use(errorHandler);
