import "./Header.css";
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";


interface HeaderProps {
    navItems: string[],
    scrollTo: (id: string) => void;
}


export const Header = ({ navItems, scrollTo }) => {
    const [selected, setSelected] = useState<string>(navItems[0]);
    const [indicator, setIndicator] = useState({left: 0, width: 0});
    const refs = useRef<Record<string, HTMLButtonElement | null>>({});

    useEffect(() => {
        const el = refs.current[selected];
        if (el) {
            setIndicator({left: el.offsetLeft, width: el.offsetWidth});
        }
    }, [selected]);
    return (
        <nav className={"header"}>
            <div className={"nav-container"}>
                <motion.div
                    className={"nav-indicator"}
                    animate={indicator}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />

                {navItems.map((item) => (
                    <button
                        key={item}
                        className={`nav-button ${selected === item ? 'active' : ''}`}
                        onClick={() => {setSelected(item); scrollTo(item)}}
                        ref={(el) => (refs.current[item] = el)}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </nav>
    )
}