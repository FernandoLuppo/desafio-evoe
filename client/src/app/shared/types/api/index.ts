export interface ApiResponseSuccess<T = any> {
  success: true
  data: T
  message?: string
}

export interface ApiResponseError {
  success: false
  error: string
}

export type ApiResponse<T = any> = ApiResponseSuccess<T> | ApiResponseError

export interface CustomError extends Error {
  statusCode?: number
}
