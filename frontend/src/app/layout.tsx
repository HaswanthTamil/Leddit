// /app/layout.tsx

import Header from "@/components/nonreusable/Header"
import type { Metadata } from "next"
import "@/styles/globals.css"
import LayoutWrapper from "@/components/nonreusable/LayoutWrapper"

export const metadata: Metadata = {
  title: "Leddit",
  description: "Reddit made Lite",
  icons: {
    icon: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white flex flex-col text-blac transition-colors duration-300 min-h-screen relative">
        <Header />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
