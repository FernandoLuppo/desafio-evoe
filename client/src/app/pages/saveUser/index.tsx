import { useParams } from "react-router-dom"
import { Form } from "./components"
import { useEffect, useState } from "react"
import { useUser } from "../../shared/hooks"
import clsx from "clsx"
import { IUser } from "../../shared/types"
import { Header } from "../../shared/components"

export const SaveUser = () => {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    if (!id) return
    const getUser = async () => setUser(await useUser.get({ id }))
    getUser()
  }, [])

  return (
    <>
      <Header showNav={false} />
      <section
        className={clsx("w-full min-h-screen", {
          "bg-evoe-yellow": user?.color === "yellow",
          "bg-evoe-blue": user?.color === "blue",
          "bg-full-black": user?.color === "black",
          "bg-evoe-red": user?.color === "red" || !user
        })}
      >
        <div className="w-full sm:w-3/4 min-h-screen bg-full-white flex flex-1 flex-col justify-center items-center px-[6vw] sm:rounded-r-[10px] shadow-[0px_3px_6px_rgba(0,0,0,0.16)]">
          <Form setUser={setUser} user={user} />
        </div>
      </section>
    </>
  )
}
