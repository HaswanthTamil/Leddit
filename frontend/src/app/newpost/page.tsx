// /app/newpost/page.tsx

import { Send } from "lucide-react"

const NewPost = () => {
  return (
    <>
      <form>
        <div className="flex flex-col flex-grow bg-gray-100 items-center px-2 py-20 overflow-y-auto overflow-x-hidden min-h-screen">
          <div className="flex flex-row w-full p-2 rounded-lg shadow-md bg-white my-2">
            <input
              placeholder="Title.. (max 200 characters)"
              className="outline-none focus:outline-none w-full"
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
              className="outline-none focus:outline-none w-full h-96"
            />
          </div>
        </div>
      </form>
    </>
  )
}

export default NewPost
