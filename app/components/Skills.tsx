import { Palette } from "lucide-react"
import { Code, Server, Database } from "lucide-react"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiPhp,
} from "react-icons/si"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
      { name: "CSS", icon: <SiCss3 className="w-5 h-5 text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-500" /> },
      { name: "React", icon: <SiReact className="w-5 h-5 text-blue-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-teal-500" /> },
    ],
    icon: <Palette className="w-6 h-6 text-blue-500" />,
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-green-500" /> },
      { name: "Express", icon: <SiExpress className="w-5 h-5 text-gray-500" /> },
      { name: "Django", icon: <SiDjango className="w-5 h-5 text-green-700" /> },
      { name: "PHP", icon: <SiPhp className="w-5 h-5 text-purple-500" /> },
    ],
    icon: <Server className="w-6 h-6 text-green-500" />,
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-blue-500" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-700" /> },
      { name: "Firebase", icon: <SiFirebase className="w-5 h-5 text-orange-500" /> },
    ],
    icon: <Database className="w-6 h-6 text-purple-500" />,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillSet) => (
            <div key={skillSet.category} className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                {skillSet.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-2">{skillSet.category}</h3>
              </div>
              <ul className="space-y-2">
                {skillSet.items.map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    {skill.icon}
                    <span className="ml-2 text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

