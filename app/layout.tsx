import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sulaiman Alfareeth - Full Stack Web Developer",
  description:
    "Personal portfolio of Sulaiman Alfareeth, a full stack web developer specializing in creating efficient, scalable, and user-friendly web applications.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

