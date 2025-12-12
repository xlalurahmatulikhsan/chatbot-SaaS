import { authService } from "./auth.service.js";

export const authController = {
  async login(req, reply) {
    try {
      const { email, password } = req.body;
      const result = await authService.login(email, password);
      reply.send({
        success: true,
        message: "Login success",
        data: result,
      });
    } catch (err) {
      reply.status(400).send({
        success: false,
        message: err.message,
      });
    }
  },
};
