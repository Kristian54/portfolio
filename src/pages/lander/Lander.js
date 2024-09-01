import {NavLink} from "react-router-dom";
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";

export default function Lander() {
    return (
        <div className="flex flex-col bg-gradient-to-br from-cyan-500 to-green-500 w-screen h-screen p-4 pr-24">

            <div className="flex flex-row w-full h-full">
                <div
                    className="flex flex-col justify-center items-center animate-fly-in-from-bottom flex-1 bg-white/30 border border-white/40 rounded-lg drop-shadow-lg backdrop-blur-sm mb-2">
                    <h1 className={'text-9xl font-light text-white'}>Kristian Nærum Garder</h1>
                    <div className={'flex flex-row absolute bottom-4 space-x-4'}>
                        <MediaIcon icon={<BsGithub color={'white'} size={40}/>} href={'https://github.com/Kristian54'}/>
                        <MediaIcon icon={<BsLinkedin color={'white'} size={40}/>} />
                        <MediaIcon icon={<BsInstagram color={'white'} size={40}/>} href={'https://www.instagram.com/kristiangarder/'}/>
                        <MediaIcon icon={<BsWhatsapp color={'white'} size={40} />} href={'https://wa.link/rnp0nx'} />
                    </div>
                </div>
            </div>

            <div className="flex flex-row w-full h-full">
                <NavLink to={'/projects'}
                    className="cursor-pointer animate-fly-in-from-top flex-1 bg-white/30 border border-white/40 rounded-lg drop-shadow-lg backdrop-blur-sm mr-2 mt-2 p-4">
                    <h1 className='text-2xl text-white font-light'>Projects</h1>
                </NavLink>
                <NavLink to={'/education'}
                    className="cursor-pointer animate-fly-in-from-top flex-1 bg-white/30 border border-white/40 rounded-lg drop-shadow-lg backdrop-blur-sm ml-2 mt-2 p-4">
                    <h1 className='text-2xl text-white font-light'>Education</h1>
                </NavLink>
            </div>

        </div>
    )
}

const MediaIcon = ({icon, href}) => (
    <a href={href} target={'_blank'}>
        {icon}
    </a>
)