import { PrimaryButton } from "./primary"
import { SecondaryButton } from "./secundary"

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  buttonType?: "primary" | "secondary"
  full?: boolean
}

export const Button = ({ label, buttonType = "primary", full }: IButton) => {
  return (
    <>
      {buttonType === "primary" ? (
        <PrimaryButton label={label} full={full} />
      ) : (
        <SecondaryButton label={label} full={full} />
      )}
    </>
  )
}
