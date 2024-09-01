import {Outlet} from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

export default function Root() {
    return (
        <div className="flex h-screen">
            <SideBar />
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}
