import { motion } from "framer-motion";
import { FaCode, FaPalette, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
  const stats = [
    { icon: <FaCode />, title: "Clean Code", text: "Reusable and scalable components" },
    { icon: <FaPalette />, title: "UI/UX Focus", text: "Modern and user-friendly layouts" },
    { icon: <FaLaptopCode />, title: "Responsive", text: "Mobile, tablet and desktop ready" },
    { icon: <FaRocket />, title: "Performance", text: "Fast and optimized experiences" },
  ];

  return (
    <section id="about" className="px-6 lg:px-20 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 mb-3">About Me</p>
          <h2 className="text-4xl lg:text-6xl font-bold">
            Designing Interfaces That Feel Premium
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-5">
              Frontend Developer & UI/UX Designer
            </h3>

            <p className="text-gray-400 leading-8">
              I’m Samar Khan, a passionate frontend developer and UI/UX designer
              focused on building modern, responsive, and visually polished web
              experiences. I enjoy transforming ideas into clean, functional,
              and engaging digital products using React, Tailwind CSS, and
              modern frontend technologies.
            </p>

            <p className="text-gray-400 leading-8 mt-5">
              My goal is to create interfaces that are not only beautiful, but
              also practical, fast, accessible, and easy to use across all
              devices.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-6 hover:-translate-y-2 transition"
              >
                <div className="text-3xl text-purple-400 mb-5">
                  {item.icon}
                </div>

                <h4 className="text-xl font-bold mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;