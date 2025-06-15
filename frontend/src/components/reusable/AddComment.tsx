// /components/reusable/AddComment.tsx
"use client"
import { Send } from "lucide-react"

const AddComment = () => {
  return (
    <>
      <div className="flex flex-row w-full p-2 rounded-lg shadow-md bg-white my-2">
        <input
          className="h-12 outline-none rounded-none w-full"
          placeholder="Add comment..."
        ></input>
        <button
          className="rounded-full w-10 h-10 shadow-md hover:text-red-600 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-red-600 flex items-center justify-center pr-2 pl-1"
          type="submit"
        >
          <Send />
        </button>
      </div>
    </>
  )
}

export default AddComment
