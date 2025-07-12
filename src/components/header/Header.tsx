import "./Header.css";
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";


interface HeaderProps {
    navItems: string[],
    scrollTo: (id: string) => void,
    activeSection: string,
}


export const Header = ({ navItems, scrollTo, activeSection }) => {
    const [indicator, setIndicator] = useState({left: 0, width: 0});
    const refs = useRef<Record<string, HTMLButtonElement | null>>({});

    useEffect(() => {
        const el = refs.current[activeSection];
        if (el) {
            setIndicator({left: el.offsetLeft, width: el.offsetWidth});
        }
    }, [activeSection]);
    return (
        <nav className={"header"}>
            <div className={"nav-container"}>
                <motion.div
                    className={"nav-indicator"}
                    animate={indicator}
                    transition={{ type: "spring", stiffness: 1000, damping: 100 }}
                />

                {navItems.map((item) => (
                    <button
                        key={item}
                        className={`nav-button ${activeSection === item ? 'active' : ''}`}
                        onClick={() => {scrollTo(item)}}
                        ref={(el) => (refs.current[item] = el)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </nav>
    )
}