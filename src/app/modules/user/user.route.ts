import { Router } from "express";
import {
  createOrUpdateProfile,
  createUser,
  getUser,
  getUsers,
} from "./user.controller";

const userRoute = Router();

userRoute.post("/create-user", createUser);
userRoute.post("/create-profile", createOrUpdateProfile);
userRoute.get("/", getUsers);
userRoute.get("/:id", getUser);

export default userRoute;
