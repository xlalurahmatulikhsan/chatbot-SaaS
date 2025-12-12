import { prisma } from "../../configs/prisma.js";
import { v4 as uuid } from "uuid";

export const tenantService = {
  async createTenant(data) {
    return prisma.tenant.create({
      data: {
        id: uuid(),
        ...data,
      },
    });
  },

  async listTenants() {
    return prisma.tenant.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async detailTenant(id) {
    return prisma.tenant.findUnique({
      where: { id },
    });
  },
};
