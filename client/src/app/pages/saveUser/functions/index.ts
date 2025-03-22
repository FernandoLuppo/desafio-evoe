import { UseFormSetValue } from "react-hook-form"
import { useApi, useAuthForm } from "../../../shared/hooks"
import { ISubmitData, ISaveUserFormValue } from "../../../shared/types"
import { userDataSchema } from "../../../shared/utils"

interface ISaveUserBody extends ISubmitData {
  body: ISaveUserFormValue
}

const handleForm = () => {
  const defaultValues = {
    name: "",
    email: "",
    phoneNumber: "",
    description: ""
  }

  const form = useAuthForm({ defaultValues, authSchema: userDataSchema })
  return {
    ...form,
    errors: form.formState.errors,
    isSubmitting: form.formState.isSubmitting
  }
}

const submitData = async ({ reset, navigate, body }: ISaveUserBody) => {
  try {
    const response = await useApi.put({
      url: "/user/save",
      body
    })
    if (!response.data.success) return window.alert(response.error as string)

    window.alert(response.data.message)
    return navigate("/list")
  } catch (error) {
    console.log(error)
  } finally {
    reset()
  }
}

const handlePhoneChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<ISaveUserFormValue>
) => {
  const rawValue = e.target.value.replace(/\D/g, "")
  setValue("phoneNumber", rawValue)
}

export { handleForm, submitData, handlePhoneChange }
