// components/reusable/PostHeader.tsx
"use client"
const PostHeader = () => {
  return (
    <>
      <div className="flex flex-col w-full leading-tight border-b border-gray-300">
        <div className="font-semibold text-lg">User name</div>
        <div className="text-sm opacity-70 -mt-2">time</div>
      </div>
    </>
  )
}

export default PostHeader
