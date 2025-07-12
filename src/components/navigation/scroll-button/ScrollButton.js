import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ScrollButton.css";
import React from "react";
import north from "../../../assets/icons/north-arrow.svg";
import south from "../../../assets/icons/south-arrow.svg";
export const ScrollButton = ({ scrollNext, bottom }) => {
    const handleScroll = () => {
        scrollNext();
    };
    return (_jsx("nav", { className: "ScrollButton", children: _jsx("div", { className: "nav-container", children: _jsxs("button", { onClick: handleScroll, className: "scrollButton", children: [_jsx("img", { src: bottom ? north : south, alt: bottom ? "North Arrow" : "South Arrow" }), "                "] }) }) }));
};
