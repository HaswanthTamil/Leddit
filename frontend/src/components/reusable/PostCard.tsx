// /components/reusable/PostCard.tsx
"use client"

import Link from "next/link"
import PostFooter from "./PostFooter"
import PostHeader from "./PostHeader"

const PostCard = ({ lineClampCount }: { lineClampCount: string }) => {
  return (
    <>
      <Link href="/post" className="cursor-default">
        <div className="flex flex-col items-center bg-white border border-gray-200 shadow-md rounded-lg p-4 mt-1 w-full md:w-md">
          <PostHeader />
          <div className="w-full py-2 max-h-[300px] overflow-hidden">
            <h1 className="font-bold text-xl">Post Title</h1>
            <p
              className={`"text-lg text-justify font-sans -tracking-tighter ${lineClampCount}`}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              sit esse corrupti. Perspiciatis deleniti, eum modi dolore eligendi
              totam officia sunt sequi velit voluptatum obcaecati saepe maxime?
              Impedit, laboriosam perferendis! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ratione sit esse corrupti.
              Perspiciatis deleniti, eum modi dolore eligendi totam officia sunt
              sequi velit voluptatum obcaecati saepe maxime? Impedit, laboriosam
              perferendis!
            </p>
          </div>
          <PostFooter />
        </div>
      </Link>
    </>
  )
}

export default PostCard
