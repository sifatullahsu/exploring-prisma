import { PrismaClient, posts } from "@prisma/client";

const prisma = new PrismaClient();

export const createPostDB = async (payload: posts) => {
  const result = await prisma.posts.create({
    data: payload,
    include: {
      categories: true,
      users: true,
    },
  });

  return result;
};

export const getPostsDB = async () => {
  const result = await prisma.posts.findMany({
    include: {
      categories: true,
      users: true,
    },
  });

  return result;
};

export const getPostDB = async (id: number) => {
  const result = await prisma.posts.findUnique({
    where: {
      id,
    },
    include: {
      categories: true,
      users: true,
    },
  });

  return result;
};

export const updatePostDB = async (id: number, payload: posts) => {
  const result = await prisma.posts.update({
    where: {
      id: id,
    },
    data: payload,
  });

  return result;
};

export const deletePostDB = async (id: number) => {
  const result = await prisma.posts.delete({
    where: {
      id,
    },
  });

  return result;
};

// export const getQueriesDB = async () => {};
