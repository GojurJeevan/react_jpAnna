import { useToggle } from "../Toggle/useToggle";
import { motion } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "E-Commerce App",
    desc: "Full-stack shopping platform with cart, search, and filters.",
    tech: ["React", "Node", "MongoDB"],
  },
  {
    id: 2,
    title: "Recipe Search Engine",
    desc: "Search engine using OpenSearch indexing over 60k recipes.",
    tech: ["Python", "React", "OpenSearch"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    desc: "Modern portfolio with animations and responsive UI.",
    tech: ["React", "Tailwind"],
  },
];

export const Projects = () => {
  const { theme } = useToggle();

  return (
    <div
      className={`p-6 min-h-screen transition-all duration-300 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-10">My Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className={`p-6 rounded-xl shadow-md border transition-all duration-300 ${
              theme === "dark"
                ? "bg-gray-900 text-white border-gray-700"
                : "bg-white text-black border-gray-300"
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">
              {project.title}
            </h2>

            <p className="opacity-80 mb-4">{project.desc}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full ${
                    theme === "dark"
                      ? "bg-gray-700 text-gray-200"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
