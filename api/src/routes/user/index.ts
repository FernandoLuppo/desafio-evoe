import { userController } from "@src/controllers/UserController"
import { auth } from "@src/middlewares/auth"
import { Router } from "express"

const userRouter = Router()

userRouter.put("/user/save", auth.userData, userController.save)
userRouter.get("/list", userController.list)
userRouter.get("/user/:_id", userController.getUser)

export { userRouter }
