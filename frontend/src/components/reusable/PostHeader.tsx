// components/reusable/PostHeader.tsx
"use client"
interface PostHeaderProps {
  created_at: string | number | Date
}

const PostHeader = ({ created_at }: PostHeaderProps) => {
  return (
    <>
      <div className="flex flex-col w-full leading-tight border-b border-gray-300">
        <div className="font-semibold text-lg">User name</div>
        <div className="text-sm opacity-70 -mt-2">
          {new Date(created_at).toLocaleString()}
        </div>
      </div>
    </>
  )
}

export default PostHeader
