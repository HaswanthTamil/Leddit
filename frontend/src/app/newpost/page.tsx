"use client"

import { useState } from "react"
import { Send } from "lucide-react"

const NewPost = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) return alert("Title is required 🫡")

    const res = await fetch("https://leddit.onrender.com/app/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    })

    if (res.ok) {
      const data = await res.json()
      console.log("Post created:", data)
      // clear inputs
      setTitle("")
      setBody("")
      alert("Post dropped successfully 🎯")
    } else {
      const err = await res.json()
      console.error("Post failed:", err)
      alert("Failed to post 😓 Check console.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col flex-grow bg-gray-100 items-center px-2 py-20 overflow-y-auto overflow-x-hidden min-h-screen">
        <div className="flex flex-row w-full p-2 rounded-lg shadow-md bg-white my-2">
          <input
            placeholder="Title.. (max 200 characters)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none focus:outline-none w-full"
            maxLength={200}
            required
          />
          <button
            className="rounded-full w-10 h-10 shadow-md hover:text-red-600 transition-all duration-200 ease-in-out border-2 border-transparent hover:border-red-600 flex items-center justify-center pr-2 pl-1"
            type="submit"
          >
            <Send />
          </button>
        </div>
        <div className="flex flex-col w-full bg-white p-2 rounded-lg shadow-md my-2">
          <textarea
            placeholder="Content.. (optional)"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="outline-none focus:outline-none w-full h-96"
          />
        </div>
      </div>
    </form>
  )
}

export default NewPost
