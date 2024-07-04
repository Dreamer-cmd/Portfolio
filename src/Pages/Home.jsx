import React from "react";
import Navbar from "../components/NavBar"
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;