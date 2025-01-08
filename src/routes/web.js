import express from "express";
import homeController from "../controllers/homeController";
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/user", homeController.getUserPage);
  router.get("/house", homeController.getHousePage);
  router.get("/login", homeController.getLoginPage);
  router.get("/register", homeController.getRegisterPage);

  return app.use("/", router);
};

export default initWebRoutes;
