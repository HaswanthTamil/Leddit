// /app/[id]/page.tsx

import AddComment from "@/components/reusable/AddComment"
import CommentCard from "@/components/reusable/CommentCard"
import PostCard from "@/components/reusable/PostCard"

const PostPage = () => {
  return (
    <>
      <div className="flex flex-col flex-grow bg-gray-100 items-center px-2 py-20 overflow-y-auto overflow-x-hidden">
        <PostCard lineClampCount="line-clamp-none" widthProp="w-full" />
        <AddComment />

        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </>
  )
}

export default PostPage
