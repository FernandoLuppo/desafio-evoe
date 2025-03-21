import cors from "cors"
import * as dotenv from "dotenv"
import express from "express"

import { corsConfig } from "./config/cors"
import { userRouter } from "./routes"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors(corsConfig))

app.use("/user", userRouter)

export { app }
