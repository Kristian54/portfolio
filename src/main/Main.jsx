import Cursor from "../components/Cursor";
import AboutMe from "../main.sections/about.me/AboutMe";
import Skills from "../main.sections/skills/Skills";
import MyWork from "../main.sections/my.work/MyWork";
import Hero from "../main.sections/hero/Hero";

export default function Main() {
    return (
        <div className={'flex flex-col'}>
            <Hero />
            <MyWork />
            <Skills />
            <AboutMe />
        </div>
    )
}