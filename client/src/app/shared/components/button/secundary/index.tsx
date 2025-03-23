import clsx from "clsx"
import { motion } from "framer-motion"
import { linkHoverBorder } from "../../../css"

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  full?: boolean
}

export const SecondaryButton = ({ label, full }: IButton) => {
  return (
    <motion.button
      className={clsx(
        "relative py-4 rounded-[10px] shadow-[0px_1px_3px_rgba(0,0,0,0.16)] overflow-hidden bg-full-white border-full-white text-full-black",
        {
          "w-full": full,
          "px-9": !full
        }
      )}
      {...linkHoverBorder}
    >
      {label}
    </motion.button>
  )
}
