export async function tenantResolver(req, reply) {
  const tenantId = req.headers["x-tenant-id"];

  if (!tenantId) {
    reply.code(400).send({
      success: false,
      message: "Tenant ID required in header (x-tenant-id)",
    });
    return;
  }

  req.tenant_id = tenantId;
}
