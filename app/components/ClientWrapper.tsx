"use client"

import Header from "./Header"
import Hero from "./Hero"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Footer from "./Footer"

export default function ClientWrapper() {
  return (
    <div id="top" className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
} 