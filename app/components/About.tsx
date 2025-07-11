export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center mb-8">
          Hi, I'm a fullstack web developer with an interest for creating efficient,
          scalable, and user-friendly web applications with expertise in responsive frontend design, backend development
           with RESTful APIs, and databases. Ready to learn new technologies and adapt to project needs, striving
            to deliver impactful solutions.
        </p>
        <div className="flex justify-center mt-6">
          <a 
            href="/Sulaiman_Alfareeth.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600">
            View Resume
          </a>
        </div>
      </div>
    </section>
  )
}
