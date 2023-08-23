import { PrismaClient, profiles, users } from "@prisma/client";

const prisma = new PrismaClient();

export const createUserDB = async (payload: users) => {
  const result = await prisma.users.create({
    data: payload,
  });

  return result;
};

export const createOrUpdateProfileDB = async (payload: profiles) => {
  const isExist = await prisma.profiles.findUnique({
    where: {
      userId: payload.userId,
    },
  });

  if (isExist) {
    const result = await prisma.profiles.update({
      where: {
        userId: payload.userId,
      },
      data: {
        bio: payload.bio,
      },
    });

    return result;
  }

  const result = await prisma.profiles.create({
    data: payload,
  });

  return result;
};

export const getUsersDB = async () => {
  const result = await prisma.users.findMany({
    select: {
      name: true,
      email: true,
      profiles: {
        select: {
          id: true,
        },
      },
    },
  });

  return result;
};

export const getUserDB = async (id: number) => {
  const result = await prisma.users.findUnique({
    where: {
      id,
    },
    include: {
      profiles: true,
    },
  });

  return result;
};
