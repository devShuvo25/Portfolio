import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                    B
                </div>
                <span className="text-xl font-bold text-text-light dark:text-text-dark">Brooklyn</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Home</a>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">About</a>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Process</a>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Portfolio</a>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Blog</a>
                <a className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Services</a>
                <a className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity" href="#">Contact</a>
            </nav>
            <button 
                className="md:hidden text-gray-700 dark:text-gray-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h16m-7 6h7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
            </button>
            {isMenuOpen && (
                <div className="absolute top-20 right-0 w-48 bg-white dark:bg-card-dark shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden z-50">
                     <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Home</a>
                     <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">About</a>
                     <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Process</a>
                     <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Portfolio</a>
                     <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Blog</a>
                     <a className="text-gray-600 dark:text-gray-300 hover:text-primary" href="#">Services</a>
                     <a className="bg-primary text-white px-5 py-2 rounded-lg font-medium text-center" href="#">Contact</a>
                </div>
            )}
        </header>
    );
};

export default Header;
