import './App.css'
import {Header} from "./components/header/Header.tsx";
import {About} from "./components/about/About.tsx";
import {Contact} from "./components/contact/Contact.tsx";
import {Experience} from "./components/experience/Experience.tsx";
import {Hero} from "./components/lander/Hero.tsx";
import {Projects} from "./components/projects/Projects.tsx";
import React, {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";



function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isOnHero, setIsOnHero] = useState(false);

  const navItems = ["About", "Experience", "Projects", "Contact"];

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => setIsOnHero(!entry.isIntersecting), {threshold: 0.05}
    );

    const element = heroRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    }
  }, [heroRef]);

  const scrollToNextSection = (id: string) => {

  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
      <>
          {isOnHero &&
              <motion.div
                  initial={{ opacity: 0, y: -100, x: "-50%" }}
                  animate={{ opacity: 1, y: 0, x: "-50%" }}
                  exit={{ opacity: 0, y: -100, x: "-50%" }}
                  transition={{ duration: 0.3 }}
                  style={{position: "fixed", top: "1rem", left: "50%", zIndex: 1000 }}
              >
                <Header navItems={navItems} scrollTo={scrollToSection}/>
              </motion.div>
          }
        <section ref={heroRef} id={"Hero"}>
          <Hero/>
        </section>
        <section id={"About"}>
          <About/>
        </section>
        <section id={"Experience"}>
          <Experience/>
        </section>
        <section id={"Projects"}>
          <Projects/>
        </section>
        <section id={"Contact"}>
          <Contact/>
        </section>
      </>
  )
}

export default App
