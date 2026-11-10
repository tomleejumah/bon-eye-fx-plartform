export type ApiSuccess<T> = { success: true; data: T };
export type ApiFailure = {
  success: false;
  error: { code: string; message: string };
};
export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;
export type UserRole = "member" | "mentor" | "content_manager" | "admin";
export type HealthStatus = {
  status: "ok";
  service: "bon-eye-api";
  timestamp: string;
  uptime: number;
};
