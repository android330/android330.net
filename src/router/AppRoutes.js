import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}