import React from 'react';
import logo from "../statics/png/foko-logo.png";

const FullPageMenu = ({isOpen, onClose}) => {
    return (<div
            className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-6xl"
            >
                &times;
            </button>

            <div className="flex w-full items-center justify-center">
                <span className='flex w-1/2 justify-center items-center'>
                    <img src={logo} alt={'logo'} className='w-[250px] h-[250px] filter brightness-0 invert'/>
                </span>

                <nav>
                    <ul className="flex w-1/2 space-x-24 text-center">
                        <li className="text-white text-3xl hover:underline"><a href="#home">Home</a></li>
                        <li className="text-white text-3xl hover:underline"><a href="#work">Work</a></li>
                        <li className="text-white text-3xl hover:underline"><a href="#studio">Studio</a></li>
                        <li className="text-white text-3xl hover:underline"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>);
};

export default FullPageMenu;