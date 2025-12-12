import { prisma } from "../../configs/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../../configs/env.js";

export const authService = {
  async login(email, password) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new Error("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
        tenant_id: user.tenant_id || null,
      },
      config.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return { token, user };
  },
};
