import ScrollProgress from "../components/ScrollProgress/ScrollProgress";
import CursorGlow from "../components/CursorGlow/CursorGlow";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Timeline from "../components/Timeline/Timeline";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {

    return (

        <>
            <ScrollProgress />
            <CursorGlow />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Timeline />
            <Contact />
            <Footer />
        </>

    )

}

export default Home;