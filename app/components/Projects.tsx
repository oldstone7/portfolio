import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "CalendarBot",
    description:
      "A conversational agent to schedule/manage events, appointments and assist users with their Google calendar.",
    image: "/calendarbot.png?height=200&width=300",
    liveLink: "https://calendarbot-tailortalk.streamlit.app/",
    githubLink: "https://github.com/oldstone7/calendarbot",
    techStack: ["Python FastAPI", "Streamlit", "Langchain", "Google’s genAI"],
  },
  {
    title: "AdmyBrand SaaS",
    description:
      "AdmyBrand is an AI-powered SaaS for marketing, branding, and customer engagement.",
    image: "/admybrand.png?height=200&width=300",
    liveLink: "https://ad-my-brand-saas.vercel.app/",
    githubLink: "https://github.com/oldstone7/ADmyBrand-SaaS",
    techStack: ["Next.js","Tailwind CSS","TypeScript"],
  },
  {
    title: "Smart AI Todo",
    description:
      "An AI-powered task management system that intelligently prioritizes,advices and enhances your tasks based on your daily context and workload.",
    image: "/smart_todo.png?height=200&width=300",
    liveLink: null,
    githubLink: "https://github.com/oldstone7/smart_todo",
    techStack: ["Python FastAPI", "Streamlit", "Langchain", "Google’s genAI"],
  },
  {
    title: "CEO Dashboard",
    description: "An admin dashboard for monitoring key performance indicators and tracking company's performance with finance, sales and operations modules.",
    image: "/ceodb.png",
    liveLink: "https://ceodb-production.up.railway.app",
    githubLink: "https://github.com/oldstone7/ceodb",
    techStack: ["HTML", "CSS", "JavaScript", "Django REST Framework", "PostgreSQL"],
  },
  {
    title: "GameStore",
    description:
      "A React-based web application showcasing a collection of games with details and specifications using a third party API",
    image: "/gamestore.png?height=200&width=300",
    liveLink: "https://gamestore-sulaiman-alfareeths-projects.vercel.app/",
    githubLink: "https://github.com/oldstone7/gamestore",
    techStack: ["React","Tailwind CSS","RAWG API"],
  },
  {
    title: "SmallTalk",
    description:
      "A web chat application for messaging and file sharing using Websocket connection with Daphne and Channels packages.",
    image: "/smalltalk.png?height=200&width=300",
    liveLink: "https://smalltalk-s8rk.onrender.com",
    githubLink: "https://github.com/oldstone7/smalltalk",
    techStack: ["HTML", "Tailwind CSS", "JQuery", "Django", "PostgreSQL"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live URL
                    </a>
                  ) : (
                    <span className="flex items-center text-gray-500 dark:text-gray-500">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Not hosted
                    </span>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

