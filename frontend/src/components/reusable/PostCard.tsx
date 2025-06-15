// /components/reusable/PostCard.tsx
"use client"

import Link from "next/link"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

type PostCardProps = {
  post: {
    id: number
    title: string
    body: string
    created_at: string
  }
  lineClampCount?: string
  widthProp?: string
}

const PostCard = ({ post, lineClampCount, widthProp }: PostCardProps) => {
  return (
    <>
      <Link href="/post" className="cursor-default">
        <div
          className={`flex flex-col items-center bg-white border border-gray-200 shadow-md rounded-lg p-4 mt-1 ${widthProp}`}
        >
          <PostHeader created_at={post.created_at} />
          <div className="w-full py-2 max-h-[300px] overflow-hidden">
            <h1 className="font-bold text-xl">{post.title}</h1>
            <p
              className={`"text-lg text-justify font-sans -tracking-tighter ${lineClampCount}`}
            >
              {post.body}
            </p>
          </div>
          <PostFooter />
        </div>
      </Link>
    </>
  )
}

export default PostCard
