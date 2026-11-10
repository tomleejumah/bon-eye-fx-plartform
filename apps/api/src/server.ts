import { app } from "./app.js";
import { env } from "./config/env.js";

const server = app.listen(env.PORT, env.HOST, () => {
  console.log(`[api] Bon Eye FX API listening on http://${env.HOST}:${env.PORT}`);
});

function shutdown(signal: string) {
  console.log(`[api] ${signal} received; closing HTTP server.`);
  server.close((error) => {
    if (error) {
      console.error("[api] Error while shutting down:", error);
      process.exit(1);
    }
    process.exit(0);
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
