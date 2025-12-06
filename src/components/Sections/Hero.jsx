import React from 'react';
import Reveal from '../Reveal';
import profileImg from '../../assets/profile.png';

const Hero = () => {
    return (
        <section className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
                <Reveal>
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-text-light dark:text-text-dark">
                            Hello, I'm <br /> Brooklyn Gilbert
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            I'm a Freelance <span className="font-semibold text-primary">UI/UX Designer</span> and <span className="font-semibold text-primary">Developer</span> based in London, England. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design.
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="mt-4">
                        <a className="bg-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity inline-block" href="#">Say Hello!</a>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="mt-12 grid grid-cols-3 gap-4">
                        <div className="bg-subtle-light/60 dark:bg-subtle-dark p-4 rounded-lg text-center backdrop-blur-sm">
                            <p className="text-2xl font-bold text-text-light dark:text-text-dark">15 Y.</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                        </div>
                        <div className="bg-subtle-light/60 dark:bg-subtle-dark p-4 rounded-lg text-center backdrop-blur-sm">
                            <p className="text-2xl font-bold text-text-light dark:text-text-dark">250+</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Project Completed</p>
                        </div>
                        <div className="bg-subtle-light/60 dark:bg-subtle-dark p-4 rounded-lg text-center backdrop-blur-sm">
                            <p className="text-2xl font-bold text-text-light dark:text-text-dark">58</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Happy Client</p>
                        </div>
                    </div>
                </Reveal>
            </div>
            <div className="flex justify-center md:justify-end">
                <Reveal>
                    <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-3xl shadow-2xl backdrop-blur-lg">
                        <img alt="Portrait of Brooklyn Gilbert smiling" className="rounded-2xl max-w-sm w-full" src={profileImg} />
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default Hero;
