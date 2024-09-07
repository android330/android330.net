import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import Minesweeeper from "../pages/Minesweeper";


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/aboutme" element={<AboutMe/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/minesweeper" element={<Minesweeeper/>}/>
        </Routes>
    )
}