




import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Ajouté pour détecter le défilement

    // Fonction pour gérer l'état du défilement
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'événement lors du démontage du composant
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav
            className={`flex items-center p-5 justify-between fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-[#F6F8FB]'
            }`}
        >
            <div className="flex">
                <Image
                    src="/img/logo.svg"
                    alt="Logo"
                    width={186}
                    height={37}
                />
            </div>
            {/* Menu Toggle Button */}
            <button
                className="md:hidden block text-[#793677] focus:outline-none"
                onClick={toggleSidebar}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* Main Navigation */}
            <div className="hidden md:flex items-center gap-9">
                <ul className="flex list-none gap-9">
                    <li>
                        <a
                            href="#"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#testimonials"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a
                            href="#news"
                            className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                            News
                        </a>
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex">
                <button className="bg-[#F6F8FB] text-[#793677] border border-2 border-[#793677] px-5 py-2 rounded hover:bg-[#793677] hover:text-[#F6F8FB] text-700 text-[16px]">
                    Register Now
                </button>
            </div>
            {/* Sidebar for Mobile */}
            <div
                className={`fixed top-0 left-0 h-full w-[250px] bg-[#F6F8FB] shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out md:hidden`}>
                
                <div>
                    <div className="flex items-center">
                        <Image
                            src="/img/logo.svg"
                            alt="Logo"
                            width={186}
                            height={37}
                        />
                        <button
                            className="text-[#793677] focus:outline-none"
                            onClick={toggleSidebar}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* <button
                    className="absolute top-4 right-4 text-[#793677] focus:outline-none"
                    onClick={toggleSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button> */}
                <ul className="flex flex-col items-start justify-between p-4 h-full">
                    <div className="flex flex-col items-start mt-20 space-y-6">
                        <li>
                            <a
                                href="#"
                                className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="font-normal text-[#02073E] text-[16px] hover:text-[#793677] active:text-[#793677]">
                                News
                            </a>
                        </li>
                    </div>
                    <div className="w-full mb-14">
                        <button className="w-full bg-[#793677] border border-2 border-[#793677] px-5 py-2 rounded text-[#F6F8FB] text-700 text-[16px]">
                            Register Now
                        </button>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
