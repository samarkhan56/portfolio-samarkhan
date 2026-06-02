import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-20 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-purple-400 mb-3">Contact Me</p>

        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
          Let's Build Something Premium
        </h2>

        <p className="text-gray-400 leading-7 mb-8 max-w-2xl mx-auto">
          Have a project idea, collaboration, or opportunity? Reach out through
          any of the links below.
        </p>

        <div className="space-y-5">
          <p className="flex items-center justify-center gap-4 text-gray-300">
            <FaEnvelope className="text-purple-400" /> khanskybolt@gmail.com
          </p>

          <p className="flex items-center justify-center gap-4 text-gray-300">
            <FaPhoneAlt className="text-purple-400" /> +92-322-5836152
          </p>

          <p className="flex items-center justify-center gap-4 text-gray-300">
            <FaMapMarkerAlt className="text-purple-400" /> Attock, Punjab,
            Pakistan
          </p>

          <div className="flex justify-center gap-5 text-3xl pt-5">
            <a
              href="https://github.com/samarkhan56"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/samar-khan-7698b63a3"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
