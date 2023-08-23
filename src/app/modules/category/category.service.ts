import { PrismaClient, categories } from "@prisma/client";

const prisma = new PrismaClient();

export const createCategoryDB = async (payload: categories) => {
  const result = await prisma.categories.create({
    data: payload,
  });

  return result;
};
