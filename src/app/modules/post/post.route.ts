import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "./post.controller";

const postRoute = Router();

postRoute.post("/create-post", createPost);
postRoute.get("/", getPosts);
postRoute.get("/:id", getPost);
postRoute.patch("/:id", updatePost);
postRoute.delete("/:id", deletePost);
// postRoute.get("/queries", getQueries);

export default postRoute;
