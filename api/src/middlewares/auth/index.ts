import { NextFunction, Request, Response } from "express"
import { userData } from "../schema"
import { handleError } from "@src/utils"

const auth = {
  userData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await userData.validate(req.body, {
        abortEarly: false
      })
      next()
    } catch (error) {
      handleError({ error, res })
    }
  }
}

export { auth }
