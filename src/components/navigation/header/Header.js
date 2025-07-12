import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Header.css";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export const Header = ({ navItems, scrollTo, activeSection }) => {
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const refs = useRef({});
    useEffect(() => {
        const el = refs.current[activeSection];
        if (el) {
            setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
        }
    }, [activeSection]);
    return (_jsx("nav", { className: "header", children: _jsxs("div", { className: "nav-container", children: [_jsx(motion.div, { className: "nav-indicator", animate: indicator, transition: { type: "spring", stiffness: 1000, damping: 100 } }), navItems.map((item) => (_jsx("button", { className: `nav-button ${activeSection === item ? 'active' : ''}`, onClick: () => { scrollTo(item); }, ref: (el) => (refs.current[item] = el), children: item }, item)))] }) }));
};
