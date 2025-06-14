// /components/reusable/CommentCard.tsx
"use client"

const CommentCard = () => {
  return (
    <>
      <div className="flex flex-col p-2 bg-white rounded-lg shadow-md w-full min-h-10 my-1">
        <div className="flex flex-row w-full leading-tight items-baseline gap-2">
          <div className="font-semibold text-md">User name</div>
          <div className="text-sm opacity-70">time</div>
        </div>
        <div>
          <p>Comment Card</p>
        </div>
      </div>
    </>
  )
}

export default CommentCard
