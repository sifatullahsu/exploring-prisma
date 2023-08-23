import { Router } from "express";
import userRoute from "../modules/user/user.route";

const AppRouter = Router();

AppRouter.use("/api/v1/users", userRoute);

export default AppRouter;
