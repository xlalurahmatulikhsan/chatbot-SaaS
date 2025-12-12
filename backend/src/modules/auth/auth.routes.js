import { authController } from "./auth.controller.js";

export default async function (app) {
  app.post("/login", authController.login);
}
