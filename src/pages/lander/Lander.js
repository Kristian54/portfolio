import {NavLink} from "react-router-dom";
import {BsGithub, BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import ntnuLogo from './../../resources/lander images/NTNU-White-English-Text.png'

export default function Lander() {
    return (
        <div className="flex flex-col bg-gradient-to-br from-cyan-500 to-green-500 w-screen sm:h-screen p-4 sm:pr-24">
            <div className="flex flex-row w-full h-auto mt-20 sm:mt-0 sm:h-full">
                <div
                    className="flex flex-row justify-between items-center text-center animate-fly-in-from-bottom flex-1 bg-white/30 border border-white/40 rounded-lg drop-shadow-lg backdrop-blur-sm mb-2">
                    <div className={'flex flex-col'}>
                        <h1 className={'w-20 transform rotate-90 scale-0 sm:scale-100 text-white text-xl font-light'}>Software Developer</h1>
                    </div>
                    <div className={'flex flex-col justify-center items-center'}>
                        <h1 className={'text-7xl sm:text-8xl font-light text-white overflow-hidden'}>Kristian Nærum
                            Garder</h1>
                        <div className={'flex flex-row sm:absolute bottom-0 space-x-4 pb-4 pt-4'}>
                            <MediaIcon icon={<BsGithub color={'white'} size={40}/>}
                                       href={'https://github.com/Kristian54'}/>
                            <MediaIcon icon={<BsLinkedin color={'white'} size={40}/>}/>
                            <MediaIcon icon={<BsInstagram color={'white'} size={40}/>}
                                       href={'https://www.instagram.com/kristiangarder/'}/>
                            <MediaIcon icon={<BsWhatsapp color={'white'} size={40}/>} href={'https://wa.link/rnp0nx'}/>
                        </div>
                    </div>
                    <div>
                        <h1 className={'w-20 transform -rotate-90 scale-0 sm:scale-100 text-white text-xl font-light'}>Web Developer</h1>
                    </div>

                </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full h-full">
                <NavLink to={'/projects'}
                         className="cursor-pointer animate-fly-in-from-top flex-1 bg-white/30 border border-white/40 rounded-lg drop-shadow-lg backdrop-blur-sm mb-2 sm:mb-0 sm:mr-2 mt-2 p-4">
                    <h1 className='text-2xl text-white font-light'>Projects</h1>
                </NavLink>
                <NavLink to={'/education'}
                         className="cursor-pointer animate-fly-in-from-top flex-1 bg-white/30 border border-white/40 rounded-lg drop-shadow-lg backdrop-blur-sm sm:ml-2 mt-2 p-4">
                    <h1 className='text-2xl text-white font-light'>Education</h1>
                    <div className={'flex flex-col justify-center items-center p-4'}>
                        <img src={ntnuLogo} className={'absolute bottom-0 p-8'}/>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

const MediaIcon = ({icon, href}) => (
    <a href={href} target={'_blank'} rel="noreferrer">
        {icon}
    </a>
)