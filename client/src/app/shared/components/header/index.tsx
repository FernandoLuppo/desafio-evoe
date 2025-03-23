import { useMediaQuery } from "react-responsive"
import { DesktopNav, MobileNav } from "./components"
import { fadeIn } from "../../css"
import { motion, useScroll, useTransform } from "framer-motion"

export const Header = ({ showNav = true }: { showNav?: boolean }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { scrollY } = useScroll()

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["transparent", "#fdfdfce8"]
  )

  return (
    <motion.header
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="w-full h-[8.5rem] flex justify-between items-center px-[32px] fixed top-0 z-10 transition-all"
      style={{ background: backgroundColor }}
    >
      <a href="/">
        <img src="/images/header/logo.png" alt="logo" width={100} />
      </a>
      {showNav && <>{isMobile ? <MobileNav /> : <DesktopNav />}</>}
    </motion.header>
  )
}
