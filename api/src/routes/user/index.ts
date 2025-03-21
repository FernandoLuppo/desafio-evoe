import { Request, Response, Router } from "express"

const userRouter = Router()

userRouter.post("/create", (req: Request, res: Response) => {
  try {
    const message = "Hello World"
    console.log({ message })
    res.status(200).send({ success: true, message })
  } catch (error) {
    console.log(error)
    res.status(500).send({ error, success: false })
  }
})

export { userRouter }
