import cors from "cors"
import * as dotenv from "dotenv"
import express from "express"
import swaggerUi from "swagger-ui-express"

import { corsConfig } from "./config/cors"
import { userRouter } from "./routes"
import swaggerDocs from "./swagger/index.json"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors(corsConfig))

app.use("/api-documentation", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/user", userRouter)

export { app }
