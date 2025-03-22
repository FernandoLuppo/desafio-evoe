import { FieldError } from "react-hook-form"

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
  errors: FieldError | undefined
  register: object
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({
  label,
  id,
  errors,
  register,
  value,
  onChange,
  ...other
}: IInput) => {
  return (
    <div>
      <h3 className="text-evoe-xl">{label}</h3>
      <input
        className="w-full h-[42px] px-4 py-3 bg-white shadow-[inset_0px_1px_3px_#00000029] border border-[#CFD0D0] border-opacity-100 rounded-[5px]"
        id={id}
        {...register}
        {...other}
        value={value}
        onChange={onChange}
      />
      {errors && (
        <p className="text-evou-red w-full mt-1 text-evoe-sm">
          {errors.message}
        </p>
      )}
    </div>
  )
}
