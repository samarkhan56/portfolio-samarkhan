import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaReact, FaRocket } from "react-icons/fa";

function Timeline() {
  const timeline = [
    {
      icon: <FaCode />,
      title: "Frontend Development Foundation",
      desc: "Started building strong foundations in HTML, CSS, JavaScript, and responsive web design.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design Learning",
      desc: "Focused on layouts, typography, spacing, user flow, and modern interface design principles.",
    },
    {
      icon: <FaReact />,
      title: "React Development",
      desc: "Started creating component-based interfaces using React, Vite, Tailwind CSS, and reusable structures.",
    },
    {
      icon: <FaRocket />,
      title: "Portfolio Project Development",
      desc: "Building professional, premium, and fully responsive frontend projects for real portfolio showcase.",
    },
  ];

  return (
    <section id="timeline" className="px-6 lg:px-20 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-purple-400 mb-3">My Journey</p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Growth Timeline
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-purple-600/40"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white z-10">
                {item.icon}
              </div>

              <div className="glass rounded-3xl p-6 ml-14 md:ml-0 md:w-[45%]">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-7">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;