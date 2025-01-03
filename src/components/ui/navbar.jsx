import { useState } from 'react';
// import { a } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black shadow-lg mb-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center space-x-3">
                    <img src="src\assets\logo.webp" alt="logo" srcset="" className='h-10 w-10 rounded-md'/>
                        <a href="/" className="text-white font-bold text-3xl">
                            Dtox
                        </a>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300">
                                Home
                            </a>
                            <a href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300">
                                About
                            </a>
                            <a href="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300">
                                Services
                            </a>
                            <a href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md transition duration-300">
                            Home
                        </a>
                        <a href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md transition duration-300">
                            About
                        </a>
                        <a href="/services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md transition duration-300">
                            Services
                        </a>
                        <a href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md transition duration-300">
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;