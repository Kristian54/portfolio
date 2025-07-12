import "./ScrollButton.css"
import React from "react";
import north from "../../../assets/icons/north-arrow.svg"
import south from "../../../assets/icons/south-arrow.svg"

interface ScrollButtonProps {
    scrollNext: () => void;
    bottom: boolean;
}

export const ScrollButton: React.FC<ScrollButtonProps> = ({scrollNext, bottom}) => {
    const handleScroll = () => {
        scrollNext();
    }

    return (
        <nav className={"ScrollButton"}>
            <div className={"nav-container"}>

                <button onClick={handleScroll} className={"scrollButton"}>
                    <img src={bottom ? (north as string) : (south as string)} alt={bottom ? "North Arrow" : "South Arrow"} />                </button>
            </div>
        </nav>
    )
}