// /components/reusable/CommentCard.tsx
"use client"

type CommentCardProps = {
  body: string
  created_at: string
}

const CommentCard = ({ body, created_at }: CommentCardProps) => {
  return (
    <>
      <div className="flex flex-col p-2 bg-white rounded-lg shadow-md w-full min-h-10 my-1">
        <div className="flex flex-row w-full leading-tight items-baseline gap-2">
          {/* <div className="font-semibold text-md">User name</div> */}
          <div className="text-sm opacity-70">
            {new Date(created_at).toLocaleString()}
          </div>
        </div>
        <div>
          <p>{body}</p>
        </div>
      </div>
    </>
  )
}

export default CommentCard
