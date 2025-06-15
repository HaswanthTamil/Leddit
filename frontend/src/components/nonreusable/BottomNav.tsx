// components/nonreusable/BottomNav.tsx
"use client"

import { Search, SquarePen, User } from "lucide-react"
import Link from "next/link"

const btnClass =
  "p-2 border-2 border-transparent hover:border-red-600 hover:text-red-600 shadow-md rounded-full transition-all duration-200 ease-in-out"

const BottomNav = () => {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full">
        <div className="flex flex-row items-center justify-between py-3 px-5 bg-white border border-gray-200 shadow-md">
          <button className={btnClass}>
            <Search className="w-7 h-7" />
          </button>
          <Link href="/newpost">
            <button className={btnClass}>
              <SquarePen className="w-7 h-7" />
            </button>
          </Link>
          <button className={btnClass}>
            <User className="w-7 h-7" />
          </button>
        </div>
      </div>
    </>
  )
}

export default BottomNav
