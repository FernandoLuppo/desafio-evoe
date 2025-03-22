import { NavigateFunction } from "react-router-dom"

export interface ISubmitData {
  navigate: NavigateFunction
  reset: () => void
}

export interface ISaveUserFormValue {
  name: string
  email: string
  phoneNumber: string
  description: string
  color: string
}
