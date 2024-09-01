import {Outlet} from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

export default function Root() {
    return (
        <div>
            <SideBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}