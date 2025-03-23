import { useEffect, useState } from "react"
import { useUser } from "../../shared/hooks"
import { useParams } from "react-router-dom"
import DOMPurify from "dompurify"
import { Button } from "../../shared/components"
import { Support } from "./components"
import { COLORS } from "../../shared/components/dropdown/constants"
import { IUser } from "../../shared/types"

export const User = () => {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<IUser | null>(null)
  const [color, setColor] = useState<string | null>(null)

  useEffect(() => {
    const getUser = async () => {
      if (!id) return
      const user = await useUser.get({ id })
      setColor(COLORS.find(color => color.value === user?.color)?.color || null)
      setUser(user)
    }
    getUser()
  }, [])

  return (
    <>
      {user?.name ? (
        <section
          className="w-full min-h-screen"
          style={{ backgroundColor: color ?? "transparent" }}
        >
          <div className="w-full sm:w-3/4 min-h-screen bg-full-white flex flex-1 flex-col justify-center items-center px-[6vw] sm:rounded-l-[10px] shadow-[0px_3px_6px_rgba(0,0,0,0.16)] ml-auto">
            <div className="py-[6vw]">
              <h1 className="text-evoe-3xl mb-6 font-bold text-black-60">
                {user.name}
              </h1>
              <div
                id="userDescription"
                className="prose"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(user.description)
                }}
              />

              <Support />

              <div className="mt-20 w-full">
                <Button color="black" full label="Confira os Benefícios" />
              </div>
              <p className="text-black-60 mt-20">
                Fale conosco{" "}
                <span className="text-full-black">{user.email}</span> ou pelo
                WhatsApp:{" "}
                <span className="text-full-black">{user.phoneNumber}</span> caso
                precise de mais informações.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
