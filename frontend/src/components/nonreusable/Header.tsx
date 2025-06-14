// /components/nonreusable/Header.tsx
"use client"

import Image from "next/image"

const Header = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <header className="flex flex-row items-center px-2 bg-white border border-gray-200 shadow-md">
          <div>
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
          </div>
          <div>
            <Image src="/leddit.png" alt="Ledit" width={60} height={60} />
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
