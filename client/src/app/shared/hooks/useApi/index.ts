import { apiError } from "../../utils"
import { api } from "./config"

type ApiResponse<T = any> = {
  success?: boolean
  data?: T
  error?: string
  [key: string]: any
}

const useApi = {
  get: async ({ url }: { url: string }): Promise<ApiResponse> => {
    try {
      const { data } = await api().get(url)
      if (!data?.success) throw new Error(data?.error)

      return { data }
    } catch (error) {
      return apiError(error)
    }
  },

  put: async ({
    url,
    body
  }: {
    url: string
    body: unknown
  }): Promise<ApiResponse> => {
    try {
      const { data } = await api().put(url, body)
      if (!data?.success) throw new Error(data?.error)

      return { data }
    } catch (error) {
      return apiError(error)
    }
  }
}

export { useApi }
