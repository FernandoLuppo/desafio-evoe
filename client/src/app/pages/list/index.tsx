import { useEffect, useState } from "react"
import { useApi } from "../../shared/hooks"
import { Header } from "../../shared/components"
import { motion } from "framer-motion"
import { fadeInUp } from "../../shared/css"
import { Card } from "./components"

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
      <section className="m-auto mt-48 max-w-[78.125rem] px-4 pb-[1.875rem] ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <motion.div
            className="flex flex-wrap gap-[1.875rem] justify-center"
            variants={fadeInUp}
            initial="hidden"
            animate="show"
          >
            <Card list={list} />
          </motion.div>
        )}
      </section>
    </>
  )
}
