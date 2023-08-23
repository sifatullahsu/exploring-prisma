import { Router } from "express";
import categoryRoute from "../modules/category/category.route";
import postRoute from "../modules/post/post.route";
import userRoute from "../modules/user/user.route";

const AppRouter = Router();

AppRouter.use("/api/v1/users", userRoute);
AppRouter.use("/api/v1/categories", categoryRoute);
AppRouter.use("/api/v1/posts", postRoute);

export default AppRouter;
