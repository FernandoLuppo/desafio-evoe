import { STATUS_CODE } from "@src/constants"
import { userServices } from "@src/services"
import { handleError } from "@src/utils"
import { Request, Response } from "express"

const userController = {
  save: async (req: Request, res: Response) => {
    try {
      const data = req.body
      const { message } = await userServices.save(data)

      res.status(STATUS_CODE.CREATED).send({ success: true, message })
    } catch (error) {
      handleError({ error, res })
    }
  },

  list: async (req: Request, res: Response) => {
    try {
      const { users } = await userServices.list()

      res.status(STATUS_CODE.CREATED).send({ success: true, users })
    } catch (error) {
      handleError({ error, res })
    }
  },

  getUser: async (req: Request, res: Response) => {
    try {
      const data = req.body
      const { user } = await userServices.getUser(data)

      res.status(STATUS_CODE.CREATED).send({ success: true, user })
    } catch (error) {
      handleError({ error, res })
    }
  }
}

export { userController }
