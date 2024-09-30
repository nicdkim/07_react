import Header from "../component/Header";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";

const LayOut = () => {

    return (
        <>
            <Header/>
            <NavBar/>
            <Outlet/>
        </>
    )
}

export default LayOut;