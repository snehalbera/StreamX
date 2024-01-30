import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainContainer() {
    return (
        <>
            <Sidebar />
            <Outlet />
        </>
    );
}

export default MainContainer;
