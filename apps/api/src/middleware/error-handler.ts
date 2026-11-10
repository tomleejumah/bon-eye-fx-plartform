import type { ErrorRequestHandler } from "express";

export const errorHandler: ErrorRequestHandler = (error: unknown, _req, res, _next) => {
  console.error("[api:error]", error);
  const message = error instanceof Error ? error.message : "An unexpected server error occurred.";
  res.status(500).json({
    success: false,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: process.env.NODE_ENV === "production" ? "An unexpected server error occurred." : message
    }
  });
};
