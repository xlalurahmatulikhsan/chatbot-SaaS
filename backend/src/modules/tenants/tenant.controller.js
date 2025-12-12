import { tenantService } from "./tenant.service.js";

export const tenantController = {
  async create(req, reply) {
    try {
      const result = await tenantService.createTenant(req.body);
      reply.send({
        success: true,
        data: result,
      });
    } catch (err) {
      reply.code(400).send({
        success: false,
        message: err.message,
      });
    }
  },

  async list(req, reply) {
    const data = await tenantService.listTenants();
    reply.send({
      success: true,
      data,
    });
  },

  async detail(req, reply) {
    const { id } = req.params;
    const data = await tenantService.detailTenant(id);

    reply.send({
      success: true,
      data,
    });
  },
};
