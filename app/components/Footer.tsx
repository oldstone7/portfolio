"use client"

import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-800 text-white py-8 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Sulaiman Alfareeth. All rights reserved.</p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/oldstone7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/m-sulaiman-alfareeth/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/MAlfareeth"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="absolute right-6 bottom-20 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  )
}

