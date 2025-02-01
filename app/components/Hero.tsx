"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-16 text-center">
        <Image
          src="/profile.jpg?height=150&width=150"
          alt="Sulaiman Alfareeth"
          width={250}
          height={250}
          className="mx-auto rounded-full shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Sulaiman Alfareeth</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Full Stack Web Developer</p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  )
}

