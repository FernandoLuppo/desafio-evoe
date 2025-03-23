import { useApi } from "../useApi"

const useUser = {
  get: async ({ id }: { id: string }) => {
    try {
      const response = await useApi.get({ url: `/user/${id}` })
      if (!response.data.success) return window.alert(response.error as string)

      return response.data.user
    } catch (error) {
      console.log(error)
    }
  }
}

export { useUser }
