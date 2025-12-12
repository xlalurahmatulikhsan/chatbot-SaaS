import tenantRoutes from "./modules/tenants/tenant.routes.js";
// import baileysRoutes from "./modules/wa-baileys/baileys.routes.js";
// import cloudRoutes from "./modules/wa-cloud/cloud.routes.js";
// import catalogRoutes from "./modules/catalog/catalog.routes.js";
// import orderRoutes from "./modules/orders/order.routes.js";
// import subscriptionRoutes from "./modules/subscriptions/subscription.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import { tenantResolver } from "./middlewares/tenantResolver.js";

export default function (app) {
  app.register(authRoutes, { prefix: "/auth" });
  app.register(tenantRoutes, { prefix: "/tenants" });
  // app.register(baileysRoutes, { prefix: "/baileys" });
  // app.register(cloudRoutes, { prefix: "/cloud" });
  // app.register(catalogRoutes, { prefix: "/catalog" });
  // app.register(orderRoutes, { prefix: "/orders" });
  // app.register(subscriptionRoutes, { prefix: "/subscriptions" });
  app.addHook("preHandler", tenantResolver);
}
