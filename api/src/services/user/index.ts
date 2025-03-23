import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
import { IUser } from "../../types"
import { CustomError } from "../../utils"
import { STATUS_CODE } from "../../constants"

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
        name: true,
        color: true
      }
    })

    if (!users.length)
      throw new CustomError({
        message: "Users not found!",
        statusCode: STATUS_CODE.INTERNAL_SERVER_ERROR
      })

    return { users }
  },

  getUser: async (id: string) => {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phoneNumber: true,
        description: true,
        color: true
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
