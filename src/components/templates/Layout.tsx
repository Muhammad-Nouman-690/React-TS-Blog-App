import { Outlet } from "react-router-dom";
import NavBar from "../molecule/navbar";

export default function Layout () {
    return(
        <>
        <NavBar/>
        <div className="text-center ">
        <Outlet />
        </div>
        </>
    );
}