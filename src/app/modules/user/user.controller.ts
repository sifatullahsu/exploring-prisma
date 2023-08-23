import { RequestHandler } from "express";
import {
  createOrUpdateProfileDB,
  createUserDB,
  getUserDB,
  getUsersDB,
} from "./user.service";

export const createUser: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await createUserDB(data);

    res.status(200).json({
      success: true,
      message: "User created successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const createOrUpdateProfile: RequestHandler = async (req, res) => {
  try {
    const data = req.body;
    const result = await createOrUpdateProfileDB(data);

    res.status(200).json({
      success: true,
      message: "User profile created or updated successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getUsers: RequestHandler = async (req, res) => {
  try {
    const result = await getUsersDB();

    res.status(200).json({
      success: true,
      message: "Users fetched successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};

export const getUser: RequestHandler = async (req, res) => {
  try {
    const result = await getUserDB(parseInt(req.params.id));

    res.status(200).json({
      success: true,
      message: "User fetched successfull.",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
};
