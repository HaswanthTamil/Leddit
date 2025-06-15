// /components/nonreusable/LayoutWrapper.tsx
"use client"

import { useState } from "react"
import BottomNav from "./BottomNav"
import SearchBar from "./SearchBar"
import { AnimatePresence, motion } from "framer-motion"

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [showSearch, setShowSearch] = useState(false)

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev)
  }

  return (
    <>
      <AnimatePresence>
        {showSearch && (
          <>
            {/* Slide-in SearchBar */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 right-0 z-60 px-4 py-4 shadow-md"
            >
              <SearchBar />
            </motion.div>

            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black backdrop-blur-sm z-50"
              style={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleSearchToggle}
            />
          </>
        )}
      </AnimatePresence>

      <div className="min-h-screen flex flex-col">
        {children}
        <BottomNav onSearchClick={handleSearchToggle} />
      </div>
    </>
  )
}
