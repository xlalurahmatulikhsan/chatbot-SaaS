import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import registerRoutes from "./routes.js";

dotenv.config();

const app = Fastify({
  logger: true,
});

// Daftarkan CORS
app.register(cors, {
  origin: "*",
});

// Register all routes
registerRoutes(app);

export default app;
