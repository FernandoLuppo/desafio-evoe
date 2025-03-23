import clsx from "clsx"
import { motion } from "framer-motion"
import { linkHoverTransition } from "../../../css"

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  full?: boolean
}

export const PrimaryButton = ({ label, full }: IButton) => {
  return (
    <motion.button
      className={clsx(
        "py-4 max-h-[3.5rem] rounded-[10px] shadow-[0px_1px_3px_rgba(0,0,0,0.16)] text-full-white bg-full-black border-[0.1875rem] border-full-black",
        "relative  ",
        {
          "w-full": full,
          "px-9": !full
        }
      )}
      {...linkHoverTransition}
    >
      {label}
    </motion.button>
  )
}
