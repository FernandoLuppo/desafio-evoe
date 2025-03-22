import { useMediaQuery } from "react-responsive"
import { DesktopNav, MobileNav } from "./components"

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <header className="w-full max-w-[1856px] flex justify-between items-center px-[32px] py-[40px] fixed top-0 z-10 bg-[rgba(253,253,252,0.745)]">
      <img src="/images/header/logo.png" alt="logo" width={100} />

      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  )
}
