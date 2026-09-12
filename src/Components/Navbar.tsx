import { useState } from "react"
import logo from "../assets/logo-text.png"
import { CiMenuBurger } from "react-icons/ci"

export default function Navbar() {

    const [navColor, setNavColor] = useState<string>("Home")

    const handleNavRouteColor = (route: string): void => {
        setNavColor(route)
    }

    return (
        <div className="flex justify-between items-center px-4 py-5 md:pt-5 sticky top-0 z-50 w-full max-w-7xl mx-auto" >
            <div className=" md:hidden">
                <CiMenuBurger color="#7B7171" size={20}/>
            </div>
            <div>
                <img src={logo} alt=""/>
            </div>
            <nav className="hidden  md:flex">
                <ul className="flex gap-7 plus text-sm font-medium ">
                    <li onClick={() => handleNavRouteColor("Home")} className={navColor === "Home" ? "text-[#DB2777] cursor-pointer" : "text-[#475569] cursor-pointer"}>Home</li>
                    <li onClick={() => handleNavRouteColor("Technologies")} className={navColor === "Technologies" ? "text-[#DB2777] cursor-pointer" : "text-[#475569] cursor-pointer"}>Technologies</li>
                    <li onClick={() => handleNavRouteColor("Projects")} className={navColor === "Projects" ? "text-[#DB2777] cursor-pointer" : "text-[#475569] cursor-pointer"}>Projects</li>
                    <li onClick={() => handleNavRouteColor("About")} className={navColor === "About" ? "text-[#DB2777] cursor-pointer" : "text-[#475569] cursor-pointer"}>About</li>
                    <li onClick={() => handleNavRouteColor("Contact")} className={navColor === "Contact" ? "text-[#DB2777] cursor-pointer" : "text-[#475569] cursor-pointer"}>Contact</li>
                </ul>
            </nav>
            <div className="flex items-center gap-3">
                <button className="inter font-bold md:font-medium text-[9px] md:text-sm text-[#334155] cursor-pointer whitespace-nowrap">Sign In</button>
                <button className="bg-[#D91B7E] plus text-white font-semibold text-[9px] md:text-sm px-2.5 md:px-5 py-1 md:py-2.5 rounded-full cursor-pointer whitespace-nowrap">Sign Up</button>
            </div>
        </div>
    )
}