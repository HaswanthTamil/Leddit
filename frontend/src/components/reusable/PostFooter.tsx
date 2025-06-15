// /components/reusable/PostFooter.tsx
"use client"
import { MessageSquare } from "lucide-react"

const PostFooter = () => {
  return (
    <>
      <div className="flex flex-row justify-between border-t border-gray-300 w-full pt-1 px-2">
        <div className="hover:text-red-600 border-2 border-transparent hover:border-red-600 shadow-lg rounded-full transition-all p-2 duration-200 ease-in-out cursor-pointer">
          <MessageSquare className="font-extralight" />
        </div>
        <div>vote</div>
      </div>
    </>
  )
}

export default PostFooter
