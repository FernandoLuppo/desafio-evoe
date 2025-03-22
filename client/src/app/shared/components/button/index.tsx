import clsx from "clsx"

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  color: "black" | "white"
  full?: boolean
}

export const Button = ({ label, color, full, ...other }: IButton) => {
  return (
    <button
      {...other}
      className={clsx(
        " py-4 rounded-[10px] border-2 shadow-[0px_1px_3px_rgba(0,0,0,0.16)]",
        {
          "bg-full-black border-full-black text-full-white": color === "black",
          "bg-full-white border-full-white text-full-black": color === "white",
          "w-full": full,
          "px-9": !full
        }
      )}
    >
      {label}
    </button>
  )
}
