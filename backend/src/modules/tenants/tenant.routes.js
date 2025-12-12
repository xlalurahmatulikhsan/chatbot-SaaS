import { tenantController } from "./tenant.controller.js";

export default async function (app) {
  app.post("/", tenantController.create);
  app.get("/", tenantController.list);
  app.get("/:id", tenantController.detail);
}
