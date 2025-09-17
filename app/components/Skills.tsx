import { Palette, Server, Database, Wrench } from "lucide-react"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiStreamlit,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiJquery,
  SiBootstrap,
  SiPython,
  SiGit,
  SiDocker,
  SiCpanel,
  SiPostman,
  SiReact as SiReactNative
} from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"

const skills = [
  {
    category: "Frontend",
    items: [
      [
        { name: "HTML", icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="w-5 h-5 text-blue-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-600" /> },
        { name: "Streamlit", icon: <SiStreamlit className="w-5 h-5 text-blue-500" /> },
      ],
      [
        { name: "React", icon: <SiReact className="w-5 h-5 text-blue-400" /> },
        { name: "React Native", icon: <SiReactNative className="w-5 h-5 text-blue-400" /> },
        { name: "jQuery", icon: <SiJquery className="w-5 h-5 text-blue-700" /> },
        //{ name: "Bootstrap", icon: <SiBootstrap className="w-5 h-5 text-purple-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-teal-500" /> },
      ]
    ],
    icon: <Palette className="w-6 h-6 text-blue-500" />,
  },
  {
    category: "Backend",
    items: [
      [
        { name: "PHP", icon: <SiPhp className="w-5 h-5 text-purple-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="w-5 h-5 text-green-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-black dark:text-white" /> },
        { name: "REST API", icon: <span className="text-sm">🔄</span> },
      ],
      [
        { name: "Python", icon: <SiPython className="w-5 h-5 text-blue-600" /> },
        { name: "FastAPI", icon: <SiFastapi className="w-5 h-5 text-green-400" /> },
        { name: "Django", icon: <SiDjango className="w-5 h-5 text-green-700" /> },
        { name: "Flask", icon: <SiFlask className="w-5 h-5 text-green-400" /> },

      ]
    ],
    icon: <Server className="w-6 h-6 text-green-500" />,
  },
  {
    category: "Databases",
    items: [
      [
        { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-700" /> },
        { name: "PostgreSQL", icon: <BiLogoPostgresql className="w-5 h-5 text-blue-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-500" /> },
      ]
    ],
    icon: <Database className="w-6 h-6 text-purple-500" />,
  },
  {
    category: "Tools & DevOps",
    items: [
      [
        { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-orange-600" /> },
        { name: "Version Control", icon: <SiGit className="w-5 h-5 text-orange-500" /> },
        { name: "Docker", icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="w-5 h-5 text-orange-500" /> },
      ],
      [
        { name: "Web Hosting", icon: <span className="text-sm">🌐</span> },
        { name: "cPanel", icon: <SiCpanel className="w-5 h-5 text-orange-500" /> },
      ]
    ],
    icon: <Wrench className="w-6 h-6 text-yellow-500" />,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Skills</h2>
        <div className="space-y-8">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.slice(0, 3).map((skillSet) => (
              <div 
                key={skillSet.category} 
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  {skillSet.icon}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-2">{skillSet.category}</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skillSet.items.map((column, colIndex) => (
                    <ul key={colIndex} className="space-y-3">
                      {column.map((skill) => (
                        <li key={skill.name} className="flex items-center">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="ml-3 text-gray-700 dark:text-gray-300 text-base">{skill.name}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Row - Centered Tools & DevOps card */}
          {skills.length > 3 && (
            <div className="flex justify-center">
              <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    {skills[3].icon}
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white ml-2">
                      {skills[3].category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {skills[3].items.map((column, colIndex) => (
                      <ul key={colIndex} className="space-y-3">
                        {column.map((skill) => (
                          <li key={skill.name} className="flex items-center">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="ml-3 text-lg text-gray-700 dark:text-gray-300">{skill.name}</span>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

