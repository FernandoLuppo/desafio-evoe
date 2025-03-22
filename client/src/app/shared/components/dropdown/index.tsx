import { COLORS } from "./constants"
import { FieldError } from "react-hook-form"

interface IDropDown {
  label: string
  id: string
  errors: FieldError | undefined
  register: object
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const DropDown = ({
  label,
  id,
  errors,
  register,
  value,
  onChange
}: IDropDown) => {
  return (
    <div>
      <h3 className="text-evoe-xl">{label}</h3>
      <select
        id={id}
        className="w-full h-[42px] px-4 py-3 bg-white shadow-sm border border-[#CFD0D0] rounded-[5px] opacity-100"
        {...register}
        value={value}
        onChange={onChange}
      >
        {COLORS.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {errors && (
        <p className="text-evou-red w-full mt-1 text-evoe-sm">
          {errors.message}
        </p>
      )}
    </div>
  )
}
