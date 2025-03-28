import { Response } from "express"
import { STATUS_CODE } from "../../constants"

interface IHandleError {
  error: unknown | CustomError
  res: Response
}

class CustomError extends Error {
  statusCode: number

  constructor(params: { message: string; statusCode: number }) {
    super(params.message)
    this.name = "CustomError"
    this.statusCode = params.statusCode
  }
}

const handleError = ({ error, res }: IHandleError) => {
  console.log(error)
  if (error instanceof CustomError) {
    return res
      .status(error.statusCode)
      .send({ success: false, error: error.message })
  }

  return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({
    success: false,
    error: "An error occurred in our system. Please try again later."
  })
}

export { CustomError, handleError }
