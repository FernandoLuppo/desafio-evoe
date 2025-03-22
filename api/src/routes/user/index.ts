import { userController } from "../../controllers/UserController"
import { auth } from "../../middlewares/auth"
import { Router } from "express"

const userRouter = Router()

userRouter.put("/save", auth.userData, userController.save)
userRouter.get("/list", userController.list)
userRouter.get("/:_id", userController.getUser)

export { userRouter }
