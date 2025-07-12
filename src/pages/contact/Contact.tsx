import "./Contact.css";
import React from "react";

export const Contact = () => {

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <main className={"Contact"}>
            <h1>Contact</h1>
            <form onSubmit={onSubmit}>
                <label>Your Email</label>
                <input placeholder={"email@example.com"} />
                <label>Subject</label>
                <input />
                <label>Message</label>
                <input />
                <button type={"submit"}>Submit</button>
            </form>
        </main>
    );
}