// /components/reusable/AddComment.tsx
"use client"
import { Send } from "lucide-react"
import { useState } from "react"

const AddComment = ({ postId }: { postId: number }) => {
  const [text, setText] = useState("")

  const handleSubmit = async () => {
    await fetch(`https://leddit.onrender.com/app/comments/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post: postId, body: text }),
    })
    setText("")
  }
  return (
    <>
      <div className="flex flex-row w-full p-2 rounded-lg shadow-md bg-white my-2">
        <input
          className="h-12 outline-none rounded-none w-full"
          placeholder="Add comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button
          className="rounded-full w-10 h-10 shadow-md hover:text-red-600 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-red-600 flex items-center justify-center pr-2 pl-1"
          type="submit"
          onClick={handleSubmit}
        >
          <Send />
        </button>
      </div>
    </>
  )
}

export default AddComment
