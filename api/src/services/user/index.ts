import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
import { IUser } from "@src/types"
import { CustomError } from "@src/utils"
import { STATUS_CODE } from "@src/constants"

const prisma = new PrismaClient()

const userServices = {
  save: async (data: IUser) => {
    const where = {
      email: data.email
    }
    data.id = data?.id ? data.id : uuidv4()

    await prisma.user.upsert({
      where,
      create: {
        ...data
      },
      update: data
    })

    return { message: "User saved with success!" }
  },

  list: async () => {
    const users = await prisma.user.findMany({
      orderBy: { updatedAt: "desc" },
      select: {
        id: true,
        name: true
      }
    })

    if (!users.length)
      throw new CustomError({
        message: "Users not found!",
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR
      })

    return { users }
  },

  getUser: async (data: IUser) => {
    const user = await prisma.user.findUnique({
      where: { id: data.id },
      select: {
        id: true,
        name: true,
        phoneNumber: true,
        description: true
      }
    })

    if (!user)
      throw new CustomError({
        message: "Users not found!",
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR
      })

    return { user }
  }
}

export { userServices }
