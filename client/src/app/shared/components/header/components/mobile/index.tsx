import { useState } from "react"
import { IoMenuSharp, IoClose } from "react-icons/io5"

export const MobileNav = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="relative">
      <button
        className="p-1 bg-full-white w-fit rounded-[10px] shadow-[0px_1px_3px_rgba(0,0,0,0.16)]"
        onClick={() => setShowNav(prev => !prev)}
      >
        {showNav ? <IoClose size={30} /> : <IoMenuSharp size={30} />}
      </button>

      {showNav && (
        <nav className="fixed top-24 left-10 right-10 p-6 bg-[#F5F5F5] rounded-[10px] shadow-lg z-50 border-4 border-full-black">
          <ul className="p-2">
            <li>
              <a
                href="/save-user"
                className="block px-4 py-2 text-black hover:bg-gray-100 rounded-[10px]"
                onClick={() => setShowNav(false)}
              >
                Crie seu projeto
              </a>
            </li>
            <div className="border-t-[1px] border-black-20" />
          </ul>
        </nav>
      )}
    </div>
  )
}
