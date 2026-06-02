import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaRocket, FaDownload } from "react-icons/fa";
import profile from "../../assets/profile.jpeg";

function Hero() {
    return (
        <section
            className="min-h-screen flex items-center justify-center px-6 lg:px-20 pt-40 pb-20"
            id="home"
        >
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Side */}
                <div>
                    <p className="text-purple-500 text-lg mb-4 font-medium">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        <span className="gradient-text">Samar Khan</span>
                    </h1>

                    <div className="text-2xl lg:text-4xl font-semibold mt-5">

                        <TypeAnimation
                            sequence={[
                                "Frontend Developer",
                                1500,
                                "UI/UX Designer",
                                1500,
                                "Creative Problem Solver",
                                1500,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="hero-role gradient-text"
                        />

                    </div>

                    <p className="text-gray-400 mt-6 max-w-lg leading-8">
                        Intermediate Frontend Developer focused on creating modern, responsive, and user-friendly web experiences.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-5 mt-8 flex-wrap">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/30 hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-3"
                        >
                            <FaRocket />
                            View Projects
                        </a>

                        <a
                            href="/Samar-CV.pdf"
                            download
                            className="px-8 py-4 rounded-2xl border border-purple-400 bg-white/70 backdrop-blur-md text-slate-900 font-semibold shadow-md hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                        >
                            <FaDownload />
                            Download CV
                        </a>
                    </div>

                    {/* Social icons */}
                    <div className="flex gap-5 mt-8 text-3xl">
                        <a
                            href="https://github.com/samarkhan56"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-full bg-white/70 text-slate-900 shadow-md flex items-center justify-center hover:bg-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/samar-khan-7698b63a3"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-full bg-white/70 text-slate-900 shadow-md flex items-center justify-center hover:bg-purple-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
                    <div className="relative w-[300px] sm:w-[340px] lg:w-[370px] h-[390px] sm:h-[430px] lg:h-[470px] rounded-[32px] overflow-hidden shadow-2xl border border-white/20">
                        <div className="absolute -inset-6 bg-purple-600 blur-[120px] opacity-30 rounded-full"></div>

                        <img
                            src={profile}
                            alt="Samar Khan"
                            className="relative w-full h-full object-cover object-[center_18%]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
