import {Outlet} from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";
import Cursor from "../cursor/Cursor";

export default function Root() {
    return (
        <div className={'cursor-none'}>
            <SideBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}