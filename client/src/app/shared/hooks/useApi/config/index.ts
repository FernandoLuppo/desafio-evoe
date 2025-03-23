import type { AxiosInstance } from "axios"
import axios from "axios"

const api = (): AxiosInstance => {
  const apiUrl = import.meta.env.VITE_API_URL

  return axios.create({
    baseURL: apiUrl,
    withCredentials: true
  })
}

export { api }
