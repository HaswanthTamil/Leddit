// /components/nonreusable/SearchBar.tsx
"use client"

import { Search } from "lucide-react"
import { useEffect, useRef } from "react"

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <div className="flex flex-row items-center rounded-full w-[70vw] bg-white shadow-md p-2 my-2 mx-auto h-10">
        <Search size={20} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="outline-none focus:outline-none w-full bg-transparent px-2"
        />
      </div>
    </>
  )
}

export default SearchBar
