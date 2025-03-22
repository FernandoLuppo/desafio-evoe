const apiError = (error: ErrorConstructor | unknown) => {
  console.log(error)
  const message =
    error instanceof Error
      ? error.message
      : "An unknown error occurred. Please try again later."
  return { error: message, success: false }
}

export { apiError }
