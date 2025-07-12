import './App.css'
import {Header} from "./components/header/Header.tsx";
import {About} from "./components/about/About.tsx";
import {Contact} from "./components/contact/Contact.tsx";
import {Experience} from "./components/experience/Experience.tsx";
import {Hero} from "./components/lander/Hero.tsx";
import {Projects} from "./components/projects/Projects.tsx";
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";



function App() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isOnHero, setIsOnHero] = useState(false);
  const [currentSection, setCurrentSection] = useState("Hero")

  const navItems = ["About", "Experience", "Projects", "Contact"];
  const sectionIds = ["Hero", "About", "Experience", "Projects", "Contact"]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter(entry => entry.isIntersecting);

                if (visibleEntries.length > 0) {
                    // Compare by visible height instead of ratio
                    const mostVisible = visibleEntries.reduce((prev, curr) => {
                        const prevVisibleHeight = prev.intersectionRect.height;
                        const currVisibleHeight = curr.intersectionRect.height;
                        return currVisibleHeight > prevVisibleHeight ? curr : prev;
                    });

                    setCurrentSection(mostVisible.target.id);
                }
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Sticky header logic
        const heroEl = heroRef.current;
        const heroObserver = new IntersectionObserver(
            ([entry]) => setIsOnHero(!entry.isIntersecting),
            { threshold: 0.05 }
        );
        if (heroEl) heroObserver.observe(heroEl);

        return () => {
            observer.disconnect();
            heroObserver.disconnect();
        };
    }, []);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    console.log(currentSection)

    console.log(sectionIds.valueOf())
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
                <Header navItems={navItems} scrollTo={scrollToSection} activeSection={currentSection}/>
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
