import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-footer-bg dark:bg-slate-900 pt-0 pb-12 mt-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm border-t border-gray-700 pt-10">
                    <div className="flex items-center mb-6 md:mb-0 order-1 md:order-1">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl mr-3 shadow-lg">
                            B
                        </div>
                        <span className="text-white font-bold text-xl tracking-wide">Brooklyn</span>
                    </div>
                    <div className="text-xs text-gray-500 order-3 md:order-3 mt-6 md:mt-0">
                        Copyright © 2022 Picto.
                    </div>
                    <nav className="order-2 md:order-2 w-full md:w-auto">
                        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                            <li><a className="hover:text-white transition-colors duration-200 text-xs md:text-sm" href="#">Home</a></li>
                            <li><a className="hover:text-white transition-colors duration-200 text-xs md:text-sm" href="#">About</a></li>
                            <li><a className="hover:text-white transition-colors duration-200 text-xs md:text-sm" href="#">Services</a></li>
                            <li><a className="hover:text-white transition-colors duration-200 text-xs md:text-sm" href="#">Process</a></li>
                            <li><a className="hover:text-white transition-colors duration-200 text-xs md:text-sm" href="#">Portfolio</a></li>
                            <li><a className="hover:text-white transition-colors duration-200 text-xs md:text-sm" href="#">Blog</a></li>
                            <li><a className="hover:text-white transition-colors duration-200 text-xs md:text-sm" href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
