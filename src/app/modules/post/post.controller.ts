import { RequestHandler } from "express";
import {
  createPostDB,
  deletePostDB,
  getPostDB,
  getPostsDB,
  updatePostDB,
} from "./post.service";

export const createPost: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await createPostDB(data);

    res.status(200).json({
      success: true,
      message: "Post created successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getPosts: RequestHandler = async (req, res) => {
  try {
    const result = await getPostsDB();

    res.status(200).json({
      success: true,
      message: "Posts fetched successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getPost: RequestHandler = async (req, res) => {
  try {
    const result = await getPostDB(parseInt(req.params.id));

    res.status(200).json({
      success: true,
      message: "Post fetched successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const updatePost: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await updatePostDB(parseInt(req.params.id), data);

    res.status(200).json({
      success: true,
      message: "Post update successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const deletePost: RequestHandler = async (req, res) => {
  try {
    const result = await deletePostDB(parseInt(req.params.id));

    res.status(200).json({
      success: true,
      message: "Post delete successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

// export const getQueries: RequestHandler = async (req, res) => {
//   try {
//     const result = await getQueriesDB();

//     res.status(200).json({
//       success: true,
//       message: "Post queries exicuted.",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({ error });
//   }
// };
