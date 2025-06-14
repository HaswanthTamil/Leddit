// /app/page.tsx

import PostCard from "@/components/reusable/PostCard"

const Home = () => {
  return (
    <>
      <div className="flex flex-col flex-grow bg-gray-100 items-center px-2 py-20 overflow-y-auto overflow-x-hidden">
        <PostCard lineClampCount="line-clamp-8" />
        <PostCard lineClampCount="line-clamp-8" />
        <PostCard lineClampCount="line-clamp-8" />
      </div>
    </>
  )
}

export default Home
