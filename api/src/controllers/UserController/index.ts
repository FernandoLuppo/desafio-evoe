import { STATUS_CODE } from "@src/constants"
import { handleError } from "@src/utils"
import { Request, Response } from "express"

const userController = {
  save: async (req: Request, res: Response) => {
    try {
      res.status(STATUS_CODE.CREATED).send({ success: true })
    } catch (error) {
      handleError({ error, res })
    }
  },
  list: async (req: Request, res: Response) => {
    try {
      res.status(STATUS_CODE.CREATED).send({ success: true })
    } catch (error) {
      handleError({ error, res })
    }
  },
  getUser: async (req: Request, res: Response) => {
    try {
      res.status(STATUS_CODE.CREATED).send({ success: true })
    } catch (error) {
      handleError({ error, res })
    }
  }
}

export { userController }
