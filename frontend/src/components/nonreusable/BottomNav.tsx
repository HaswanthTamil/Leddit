// components/nonreusable/BottomNav.tsx
"use client"

import { Search, SquarePen, User } from "lucide-react"
import { UserButton, SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"

const btnClass =
  "border-2 border-transparent hover:border-red-600 hover:text-red-600 shadow-md rounded-full transition-all duration-200 ease-in-out"

const BottomNav = ({ onSearchClick }: { onSearchClick: () => void }) => {
  const { isSignedIn } = useUser()
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full">
        <div className="flex flex-row items-center justify-between sm:justify-center sm:gap-30 py-3 px-5 bg-white border border-gray-200 shadow-md">
          <button className={`${btnClass} p-2`} onClick={onSearchClick}>
            <Search className="w-7 h-7" />
          </button>
          <Link href={isSignedIn ? "/newpost" : "/auth/sign-in"}>
            <button className={`${btnClass} p-2`}>
              <SquarePen className="w-7 h-7" />
            </button>
          </Link>
          <div>
            <button className={`${btnClass} px-2 pb-1 pt-2`}>
              <SignedIn>
                <UserButton />
              </SignedIn>
              <SignedOut>
                <SignUpButton>
                  <User className="w-7 h-7" />
                </SignUpButton>
              </SignedOut>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BottomNav
