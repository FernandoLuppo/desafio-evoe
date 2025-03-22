import { useEffect, useState } from "react"
import { BiSolidEdit } from "react-icons/bi"
import { useApi } from "../../shared/hooks"
import { Header } from "../../shared/components"
import { COLORS } from "../../shared/components/dropdown/constants"

export const List = () => {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([])

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await useApi.get({ url: "/user/list" })
        if (!response.data.success)
          return window.alert(response.error as string)

        setList(response.data.users)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    getList()
  }, [])

  return (
    <>
      <Header />
      <section className="m-auto mt-48 max-w-[78.125rem] px-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-[1.875rem] justify-center">
            {list?.map((item: { name: string; id: string; color: string }) => {
              const selectColor = COLORS.find(color =>
                color.value === item.color ? color.color : ""
              )
              return (
                <a
                  href={`/user/${item.id}`}
                  key={item.id}
                  className="flex-none"
                >
                  <div
                    className="w-[23.375rem] h-[25rem] shadow-[0px_1px_3px_rgba(0,0,0,0.16)] rounded-[10px] px-8 py-6 flex flex-col justify-between"
                    style={{ backgroundColor: selectColor?.color }}
                  >
                    <a href={`/save-user/${item.id}`} className="self-end">
                      <button className="p-1 bg-full-white w-fit rounded-[10px] shadow-[0px_1px_3px_rgba(0,0,0,0.16)]">
                        <BiSolidEdit size={30} />
                      </button>
                    </a>
                    <h3 className="mt-auto mb-20 text-full-white text-evoe-3xl">
                      <strong>{item.name}</strong>
                    </h3>
                  </div>
                </a>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
