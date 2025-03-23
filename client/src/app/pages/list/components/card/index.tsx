import { BiSolidEdit } from "react-icons/bi"
import { IUser } from "../../../../shared/types"
import { COLORS } from "../../../../shared/components/dropdown/constants"
import { linkHover } from "../../../../shared/css"
import { motion } from "framer-motion"

export const Card = ({
  list
}: {
  list: Pick<IUser, "name" | "id" | "color">[]
}) => {
  return (
    <>
      {list?.map(item => {
        const selectColor =
          COLORS.find(color => color.value === item.color)?.color || ""

        return (
          <motion.a
            href={`/user/${item.id}`}
            key={item.id}
            className="flex-none"
            {...linkHover}
          >
            <div
              className="w-[19.4375rem] h-[25rem] md:w-[23.375rem] md:h-[25rem] shadow-[0px_1px_3px_rgba(0,0,0,0.16)] rounded-[10px] px-8 py-6 flex flex-col justify-between"
              style={{ backgroundColor: selectColor }}
            >
              <a href={`/save-user/${item.id}`} className="self-end">
                <button className="p-1 bg-full-white w-fit rounded-[10px] shadow-[0px_1px_3px_rgba(0,0,0,0.16)]">
                  <BiSolidEdit size={30} />
                </button>
              </a>
              <h3 className="mt-auto mb-20 text-full-white text-evoe-3xl line-clamp-3">
                <strong>{item.name}</strong>
              </h3>
            </div>
          </motion.a>
        )
      })}
    </>
  )
}
