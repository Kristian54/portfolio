import "./ScrollButton.css";
import React from "react";
interface ScrollButtonProps {
    scrollNext: () => void;
    bottom: boolean;
}
export declare const ScrollButton: React.FC<ScrollButtonProps>;
export {};
