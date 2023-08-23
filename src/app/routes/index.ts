import { Router } from "express";
import categoryRoute from "../modules/category/category.route";
import userRoute from "../modules/user/user.route";

const AppRouter = Router();

AppRouter.use("/api/v1/users", userRoute);
AppRouter.use("/api/v1/categories", categoryRoute);

export default AppRouter;
