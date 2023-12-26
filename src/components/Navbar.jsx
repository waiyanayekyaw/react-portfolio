import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <nav className="bg-dbg w-full py-5 fixed">
            <div className="flex items-center justify-around mx-10">
                <img src={logo} alt="" className="w-14" />

                <div className="hidden sm:block">
                    <ul className="text-primary lg:flex lg:space-x-10">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Skills</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Project</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
