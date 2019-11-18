import React from "react";

const Footer = props => {

    return (
        <footer className="App-footer flex flex-col bg-gray-300">
            <h1 className="uppercase h-16 flex items-center justify-center">Contact Me</h1>
            <form className="flex flex-col m-auto max-w-sm">
                <div className="flex justify-between">
                    <input className="my-1 h-10 rounded" type="text" placeholder="Name"/>
                    <input className="my-1 h-10 rounded" type="email" placeholder="Email"/>
                </div>
                <input className="my-2 h-10 rounded" type="text" placeholder="Subject" />
                <textarea style={{ resize: 'none' }} cols="50" rows="10" placeholder="Message" ></textarea>
                <input className="h-10 mt-4 rounded bg-blue-700 text-white" type="submit" title="Submit" />
            </form>
            <span className="h-12 text-xs pl-8 flex items-center bg-white">© 2019 By Fernando Perez.</span>
        </footer>
    )
};

export default Footer;