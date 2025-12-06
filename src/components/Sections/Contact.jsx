import React from 'react';
import Reveal from '../Reveal';

const Contact = () => {
    return (
        <>
            <section className="text-center mb-24">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-light dark:text-white mb-6 tracking-tight">Testimonial</h2>
                </Reveal>
                <Reveal width="100%">
                    <p className="text-sm md:text-base text-gray-400 dark:text-gray-500 mb-12 max-w-lg mx-auto leading-relaxed">
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration.
                    </p>
                </Reveal>
                <Reveal width="100%">
                    <blockquote className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 leading-8 md:leading-9 mb-10 px-4">
                        "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio
                        convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
                        Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                        Morbi ornare elit at libero suscipit porta."
                    </blockquote>
                </Reveal>
                <Reveal width="100%">
                    <div className="mb-10">
                        <h4 className="text-text-light dark:text-white font-bold text-lg">Esther Howard</h4>
                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">Managing Director, ABC company</p>
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <div className="flex justify-center items-center space-x-3">
                        <button aria-label="Go to slide 1" className="w-8 h-2 bg-[#262E3E] dark:bg-white rounded-full transition-all duration-300"></button>
                        <button aria-label="Go to slide 2" className="w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-gray-400 transition-all duration-300"></button>
                        <button aria-label="Go to slide 3" className="w-2 h-2 bg-gray-300 dark:bg-gray-700 rounded-full hover:bg-gray-400 transition-all duration-300"></button>
                    </div>
                </Reveal>
            </section>

            <Reveal width="100%">
                <section className="bg-white dark:bg-slate-800 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-7xl mx-auto transform transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <div className="w-full lg:w-5/12 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-text-light dark:text-white mb-4">Let's discuss your Project</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm leading-relaxed">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                        </p>
                        <div className="space-y-8 mb-12">
                            <div className="flex items-start space-x-5 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-slate-700 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons-outlined text-2xl">location_on</span>
                                </div>
                                <div className="pt-1">
                                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-bold tracking-wider mb-1">Address:</p>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">New Mexico 31134</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-5 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-slate-700 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons-outlined text-2xl">email</span>
                                </div>
                                <div className="pt-1">
                                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-bold tracking-wider mb-1">My Email:</p>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">mymail@mail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-5 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 dark:bg-slate-700 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons-outlined text-2xl">call</span>
                                </div>
                                <div className="pt-1">
                                    <p className="text-xs text-gray-400 dark:text-gray-500 uppercase font-bold tracking-wider mb-1">Call Me Now:</p>
                                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">00-1234 00000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-3 pt-4">
                            {/* Social icons would go here */}
                        </div>
                    </div>
                    <div className="w-full lg:w-7/12 p-8 md:p-12 lg:p-16 relative">
                        <div className="absolute left-0 top-16 bottom-16 w-px bg-gray-100 dark:bg-gray-700 hidden lg:block"></div>
                         <form action="#" className="space-y-6">
                            <div className="group">
                                <label className="block text-xs font-semibold text-primary mb-2 transition-colors group-focus-within:text-primary" htmlFor="name">Name*</label>
                                <input className="w-full border-0 border-b border-primary/40 dark:border-gray-600 bg-transparent py-2 text-gray-900 dark:text-white focus:border-primary focus:ring-0 placeholder-gray-300 transition-colors" id="name" type="text"/>
                            </div>
                            <div className="group">
                                <label className="block text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2 transition-colors group-focus-within:text-primary" htmlFor="email">Email*</label>
                                <input className="w-full border-0 border-b border-gray-200 dark:border-gray-600 bg-transparent py-2 text-gray-900 dark:text-white focus:border-primary focus:ring-0 placeholder-gray-300 transition-colors" id="email" type="email"/>
                            </div>
                            <div className="pt-8">
                                <button className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded shadow-lg shadow-purple-300 dark:shadow-none transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </Reveal>
        </>
    );
};

export default Contact;
