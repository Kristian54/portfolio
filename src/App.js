import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { Header } from "./components/navigation/header/Header.tsx";
import { About } from "./pages/about/About.tsx";
import { Contact } from "./pages/contact/Contact.tsx";
import { Experience } from "./pages/experience/Experience.tsx";
import { Hero } from "./pages/lander/Hero.tsx";
import { Projects } from "./pages/projects/Projects.tsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScrollButton } from "./components/navigation/scroll-button/ScrollButton.tsx";
function App() {
    const heroRef = useRef(null);
    const [isOnHero, setIsOnHero] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);
    const [currentSection, setCurrentSection] = useState("Hero");
    const navItems = ["About", "Experience", "Projects", "Contact"];
    const sectionIds = useMemo(() => ["Hero", "About", "Experience", "Projects", "Contact"], []);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
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
        }, {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        });
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el)
                observer.observe(el);
        });
        if (currentSection === "Hero") {
            setIsOnHero(true);
        }
        else {
            setIsOnHero(false);
        }
        if (currentSection === "Contact") {
            setIsAtBottom(true);
        }
        else {
            setIsAtBottom(false);
        }
        return () => {
            observer.disconnect();
        };
    }, [currentSection, sectionIds]);
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToNextSection = () => {
        const index = sectionIds.indexOf(currentSection);
        let element;
        if (index + 1 < sectionIds.length) {
            element = document.getElementById(sectionIds[index + 1]);
        }
        else {
            element = document.getElementById(sectionIds[0]);
        }
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (_jsxs(_Fragment, { children: [isOnHero ||
                _jsx(motion.div, { initial: { opacity: 0, y: -100, x: "-50%" }, animate: { opacity: 1, y: 0, x: "-50%" }, exit: { opacity: 0, y: -100, x: "-50%" }, transition: { duration: 0.3 }, style: { position: "fixed", top: "1rem", left: "50%", zIndex: 1000 }, children: _jsx(Header, { navItems: navItems, scrollTo: scrollToSection, activeSection: currentSection }) }), _jsx(motion.div, { initial: { opacity: 0, y: +100, x: "-50%" }, animate: { opacity: 1, y: 0, x: "-50%" }, exit: { opacity: 0, y: +100, x: "-50%" }, transition: { duration: 0.3 }, style: { position: "fixed", bottom: "1rem", left: "50%", zIndex: 1000 }, children: _jsx(ScrollButton, { scrollNext: scrollToNextSection, bottom: isAtBottom }) }), _jsx("section", { ref: heroRef, id: "Hero", children: _jsx(Hero, {}) }), _jsx("section", { id: "About", children: _jsx(About, {}) }), _jsx("section", { id: "Experience", children: _jsx(Experience, {}) }), _jsx("section", { id: "Projects", children: _jsx(Projects, {}) }), _jsx("section", { id: "Contact", children: _jsx(Contact, {}) })] }));
}
export default App;
