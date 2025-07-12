import "./Header.css";
import React from "react";
interface HeaderProps {
    navItems: string[];
    scrollTo: (id: string) => void;
    activeSection: string;
}
export declare const Header: React.FC<HeaderProps>;
export {};
