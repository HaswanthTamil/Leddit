// /app/layout.tsx

import Header from "@/components/nonreusable/Header"
import type { Metadata } from "next"
import "@/styles/globals.css"

export const metadata: Metadata = {
  title: "Leddit",
  description: "Reddit made Lite",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-blac transition-colors duration-300">
        <Header />
        {children}
      </body>
    </html>
  )
}
