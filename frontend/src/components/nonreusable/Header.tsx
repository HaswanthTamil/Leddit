// /components/nonreusable/Header.tsx
"use client"

import { ArrowLeftFromLine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full">
        <div className="flex flex-row items-center justify-between px-2 md:px-4 bg-white border border-gray-200 shadow-md">
          <div className="flex flex-row items-center">
            <div>
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
            <div>
              <Image src="/leddit.png" alt="Ledit" width={60} height={60} />
            </div>
          </div>
          <Link href={pathname !== "/" ? "/" : "/about"}>
            <div className="hover:text-red-600 border-2 border-transparent hover:border-red-600 shadow-lg rounded-full transition-all p-2 duration-200 ease-in-out">
              {pathname !== "/" ? (
                <ArrowLeftFromLine />
              ) : (
                <span className="italic font-bold text-md px-2.5">i</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
