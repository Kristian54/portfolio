import {NavLink} from "react-router-dom";
import {BsBook, BsHouseDoor, BsTools} from "react-icons/bs";

export default function SideBar() {
    return (
        <div className='absolute top-4 left-4 right-4 h-auto
        sm:left-auto sm:bottom-4 sm:w-16
        flex flex-row sm:flex-col justify-center
        backdrop-blur-sm border bg-white/30 border-white/40 rounded-lg drop-shadow-lg
        transition-all ease-linear duration-200
        sm:hover:w-80 hover: group z-40'>
            <NavLink className={'navButton cursor-pointer'} to='/lander'>
                <SideBarNavButton icon={<BsHouseDoor size={20} color={'white'}/> } text='Home'/>
            </NavLink>
            <NavLink className={'navButton hover:cursor-pointer'} to='/projects'>
                <SideBarNavButton icon={<BsTools size={20} color={'white'}/> } text='Projects'/>
            </NavLink>
            <NavLink className={'navButton hover:cursor-pointer'} to='/education'>
                <SideBarNavButton icon={<BsBook size={20} color={'white'}/> } text='Education'/>
            </NavLink>
        </div>
    )
}

const SideBarNavButton = ({icon, text}) => (
    <div className='sidebar-icon group flex items-center
    h-12 border border-white/40 m-2 rounded-lg
    transition-all duration-100 ease-linear
    sm:hover:bg-gray-600/20 active:bg-gray-600/30'>
        <div className="flex items-center justify-center w-20">
            {icon}
        </div>
        <span className='text-white whitespace-nowrap overflow-hidden
        max-w-0 text-xl
        transition-all duration-200 ease-linear
        sm:group-hover:max-w-xs sm:group-hover:ml-2'>
             {text}
        </span>
    </div>
);



