import {Outlet} from "react-router-dom";
import SideBar from "../components/sidebar/SideBar";

export default function Root() {
    return (
        <>
            <SideBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}