"use client"

import { useEffect, useState } from "react"
import PostCard from "@/components/reusable/PostCard"

type Post = {
  id: number
  title: string
  body: string
  created_at: string
  comments: string[]
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://leddit.onrender.com/app/posts/")
        if (!res.ok) throw new Error("Failed to fetch posts")
        const data = await res.json()
        setPosts(data)
      } catch (err) {
        console.error("Error fetching posts:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="flex flex-col flex-grow bg-gray-100 items-center px-2 py-20 overflow-y-auto overflow-x-hidden">
      {loading ? (
        <p className="text-gray-600">Loading posts...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post} // pass post as prop
            lineClampCount="line-clamp-8"
            widthProp="w-full md:w-md"
          />
        ))
      ) : (
        <p className="text-gray-600">No posts yet 👀</p>
      )}
    </div>
  )
}

export default Home
