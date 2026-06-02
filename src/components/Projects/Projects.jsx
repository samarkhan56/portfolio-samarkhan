import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import projects from "../../data/projects";

function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "React", "JavaScript", "Frontend", "Full Stack"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((item) => item.categories.includes(filter));

  return (
    <section id="projects" className="px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-500 font-medium">My Projects</p>

          <h2 className="text-4xl lg:text-6xl font-bold mt-3">
            Featured Work
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setFilter(item)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                filter === item
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/70 text-slate-800 border border-purple-100 hover:bg-purple-600 hover:text-white hover:border-purple-600"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/75 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/40 shadow-xl hover:shadow-purple-400/25 hover:-translate-y-3 transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">
                <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                  {project.categories.join(" / ")}
                </span>

                <h3 className="text-2xl font-bold mt-4 text-slate-900">
                  {project.title}
                </h3>

                <p className="text-slate-600 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-black transition flex items-center gap-2"
                  >
                    <FaGithub />
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
