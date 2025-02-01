"use client"

import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
            SA
          </a>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#top" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              About
            </a>
            <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              Contact
            </a>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 mr-4">
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 py-2">
          <a
            href="#top"
            className="block py-2 px-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            onClick={toggleMenu}
          >
            About
          </a>
          <a
            href="#skills"
            className="block py-2 px-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block py-2 px-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 px-6 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

