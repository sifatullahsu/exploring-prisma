import { RequestHandler } from "express";
import { createCategoryDB } from "./category.service";

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await createCategoryDB(data);

    res.status(200).json({
      success: true,
      message: "Category created successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};
