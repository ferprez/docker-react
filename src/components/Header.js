import React from "react";
import logo from '../logo.svg';

const Header = () => {

    return (
        <header className="App-header bg-white shadow-md">
            <div className="h-full flex justify-between items-center mx-8">
                <div className="flex">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className="text-2xl">Fernando Pérez</p>
                </div>
                <ul className="flex">
                    <li className="mx-2">Experience</li>
                    <li className="mx-2">Education</li>
                    <li className="mx-2">Clients</li>
                    <li className="mx-2">Skills</li>
                    <li className="mx-2">Contact</li>
                </ul>
            </div>
        </header>
    )
};

export default Header;