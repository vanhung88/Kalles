import productRouters from "./productRoutes.js";
import userRoutes from "./userRoutes.js";
function route(app) {
  app.use("/api/products", productRouters);
  app.use("/api/users", userRoutes);
}

export default route;
