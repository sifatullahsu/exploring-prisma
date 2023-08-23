import { Router } from "express";
import { createCategory } from "./category.controller";

const categoryRoute = Router();

categoryRoute.post("/create-category", createCategory);

export default categoryRoute;
