import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Contact.css";
import React from "react";
export const Contact = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (_jsxs("main", { className: "Contact", children: [_jsx("h1", { children: "Contact" }), _jsxs("form", { onSubmit: onSubmit, children: [_jsx("label", { children: "Your Email" }), _jsx("input", { placeholder: "email@example.com" }), _jsx("label", { children: "Subject" }), _jsx("input", {}), _jsx("label", { children: "Message" }), _jsx("input", {}), _jsx("button", { type: "submit", children: "Submit" })] })] }));
};
