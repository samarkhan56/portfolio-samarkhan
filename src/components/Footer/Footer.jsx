function Footer() {
  return (
    <footer className="px-6 lg:px-20 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">
          Samar<span className="text-purple-400">.</span>
        </h2>

        <p className="text-gray-400 text-center">
          © 2026 Samar Khan. Designed & Developed by Samar Khan.
        </p>

        <a
          href="#home"
          className="text-purple-400 hover:text-purple-300 transition"
        >
          Back to Top
        </a>
      </div>
    </footer>
  );
}

export default Footer;