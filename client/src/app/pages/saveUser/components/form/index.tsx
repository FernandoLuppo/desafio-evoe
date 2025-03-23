import { Button, Input, DropDown } from "../../../../shared/components"
import { ISaveUserFormValue, IUser } from "../../../../shared/types"
import { handleForm, handlePhoneChange, submitData } from "../../functions"
import { useNavigate } from "react-router-dom"
import { TextEditor } from "./components/"
import { useEffect } from "react"
import { fadeInUp } from "../../../../shared/css"
import { motion } from "framer-motion"

interface IForm {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}

export const Form = ({ user, setUser }: IForm) => {
  const navigate = useNavigate()

  const {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    reset,
    watch,
    setValue
  } = handleForm({ defaultValues: user || undefined })
  const handleSubmitData = async (body: ISaveUserFormValue) =>
    await submitData({ reset, navigate, body })
  const phoneNumberValue = watch("phoneNumber")
  const descriptionValue = watch("description")

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        description: user.description,
        color: user.color
      })
    }
  }, [user, reset])

  const handleInputChange = (field: keyof IUser, value: string) => {
    setUser(prevUser => {
      if (!prevUser) return null
      return {
        ...prevUser,
        [field]: value
      }
    })
  }

  return (
    <motion.form
      onSubmit={handleSubmit(handleSubmitData)}
      className="w-full 2xl:w-[900px] py-[6vw] mt-32 md:mt-20 flex flex-col gap-5 text-black-60"
      variants={fadeInUp}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-evoe-3xl mb-10">
        Insira as Informações da Organização
      </h1>
      <Input
        label="Informe o nome da sua organização:"
        id="name"
        errors={errors.name}
        register={{ ...register("name") }}
        placeholder="Nome:"
        value={user?.name}
        onChange={e => handleInputChange("name", e.target.value)}
      />
      <Input
        label="Insira o e-mail de contato:"
        id="email"
        errors={errors.email}
        register={{ ...register("email") }}
        placeholder="Email:"
        type="email"
        value={user?.email}
        onChange={e => handleInputChange("email", e.target.value)}
      />
      <Input
        label="Digite o número de celular para contato:"
        id="phoneNumber"
        errors={errors.phoneNumber}
        register={{
          ...register("phoneNumber", {
            required: "Número é obrigatório",
            pattern: {
              value: /^\d+$/,
              message: "Apenas números são permitidos"
            }
          })
        }}
        value={user?.phoneNumber || phoneNumberValue || ""}
        onChange={e => {
          handleInputChange("phoneNumber", e.target.value)
          handlePhoneChange(e, setValue)
        }}
        placeholder="Celular:"
        maxLength={12}
      />

      <DropDown
        label="Selecione uma Cor de fundo"
        id="color"
        errors={errors.color}
        register={{ ...register("color") }}
        value={user?.color}
        onChange={e => handleInputChange("color", e.target.value)}
      />

      <TextEditor
        value={user?.description || descriptionValue}
        onChange={value => {
          handleInputChange("description", value)
          setValue("description", value)
        }}
        errors={errors.description}
      />

      <Button label="Salvar" disabled={isSubmitting} color="black" full />
    </motion.form>
  )
}
