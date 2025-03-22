import { Button, Input, DropDown } from "../../../../shared/components"
import { ISaveUserFormValue } from "../../../../shared/types"
import { handleForm, handlePhoneChange, submitData } from "../../functions"
import { useNavigate } from "react-router-dom"
import TextEditor from "./components/textEditor"

export const Form = () => {
  const navigate = useNavigate()
  const {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    reset,
    watch,
    setValue
  } = handleForm()
  const handleSubmitData = async (body: ISaveUserFormValue) =>
    await submitData({ reset, navigate, body })
  const phoneNumberValue = watch("phoneNumber")
  const descriptionValue = watch("description")

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className="w-full 2xl:w-[900px] py-[6vw] flex flex-col gap-5 text-black-60"
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
      />
      <Input
        label="Insira o e-mail de contato:"
        id="email"
        errors={errors.email}
        register={{ ...register("email") }}
        placeholder="Email:"
        type="email"
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
        value={phoneNumberValue || ""}
        onChange={e => handlePhoneChange(e, setValue)}
        placeholder="Celular:"
        maxLength={12}
      />

      <DropDown
        label="Selecione uma Cor de fundo"
        id="color"
        errors={errors.color}
        register={{ ...register("color") }}
      />

      <TextEditor
        value={descriptionValue}
        onChange={value => setValue("description", value)}
        errors={errors.description}
      />

      <Button label="Salvar" disabled={isSubmitting} color="black" full />
    </form>
  )
}
