import type { AxiosInstance } from "axios"
import axios from "axios"

const api = (): AxiosInstance => {
  // const apiUrl = process.env.VITE_API_URL
  // console.log({ apiUrl })

  return axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true
  })
}

export { api }
