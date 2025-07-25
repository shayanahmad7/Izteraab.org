import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "EdVance Pakistan - Empowering Personalized Learning",
  description: "Transforming education in Pakistan through AI-powered personalized learning and flipped classrooms",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%2340916c'/><path d='M25 25h50v50H25z' fill='%23faf8f6'/><circle cx='50' cy='40' r='8' fill='%2340916c'/><path d='M35 55h30v5H35z' fill='%2340916c'/><path d='M40 65h20v3H40z' fill='%2340916c'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
  themeColor: "#40916c",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
