// /app/[id]/page.tsx
"use client"

import { useEffect, useState } from "react"
import AddComment from "@/components/reusable/AddComment"
import CommentCard from "@/components/reusable/CommentCard"
import PostCard from "@/components/reusable/PostCard"

type Comment = {
  id: number
  body: string
  created_at: string
}

type Post = {
  id: number
  title: string
  body: string
  created_at: string
  comments: Comment[]
}

const PostPage = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<Post | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://leddit.onrender.com/app/posts/${params.id}/`
      )
      const data = await res.json()
      setPost(data)
    }
    fetchPost()
  }, [params.id])

  if (!post) return <div>Loading...</div>

  return (
    <div className="flex flex-col flex-grow bg-gray-100 items-center px-2 py-20 overflow-y-auto overflow-x-hidden">
      <PostCard
        post={post}
        lineClampCount="line-clamp-none"
        widthProp="w-full"
      />

      <AddComment postId={post.id} />

      {post.comments.map((comment) => (
        <CommentCard
          key={comment.id}
          body={comment.body}
          created_at={comment.created_at}
        />
      ))}
    </div>
  )
}

export default PostPage
