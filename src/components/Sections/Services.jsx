import React from 'react';
import Reveal, { RevealList, RevealItem } from '../Reveal';

const Services = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 lg:sticky lg:top-12 space-y-6 pt-4">
                <Reveal>
                    <h2 className="text-3xl sm:text-4xl font-bold text-text-light dark:text-text-dark tracking-tight">
                        Work Process
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="space-y-4">
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-base sm:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet.
                        </p>
                        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed text-base sm:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                        </p>
                    </div>
                </Reveal>
            </div>
            <div className="w-full lg:w-2/3">
                <RevealList>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <RevealItem>
                            <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-transparent dark:border-gray-700 h-full">
                                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-md transform transition-transform hover:scale-110">
                                    <span className="material-icons-round text-white text-3xl">assignment</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                                    1. Research
                                </h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </p>
                            </div>
                        </RevealItem>
                        <RevealItem>
                            <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-transparent dark:border-gray-700 sm:translate-y-12 h-full">
                                <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-opacity-10 flex items-center justify-center mb-6">
                                    <span className="material-icons-round text-primary text-3xl">trending_up</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                                    2. Analyze
                                </h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </p>
                            </div>
                        </RevealItem>
                        <RevealItem>
                            <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-transparent dark:border-gray-700 h-full">
                                <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-opacity-10 flex items-center justify-center mb-6">
                                    <span className="material-icons-round text-primary text-3xl">edit</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                                    3. Design
                                </h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </p>
                            </div>
                        </RevealItem>
                        <RevealItem>
                            <div className="bg-card-light dark:bg-card-dark rounded-xl p-8 shadow-soft hover:shadow-lg transition-shadow duration-300 border border-transparent dark:border-gray-700 sm:translate-y-12 h-full">
                                <div className="w-14 h-14 rounded-xl bg-primary-light dark:bg-opacity-10 flex items-center justify-center mb-6">
                                    <span className="material-icons-round text-primary text-3xl">laptop_mac</span>
                                </div>
                                <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-3">
                                    4. Launch
                                </h3>
                                <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                                </p>
                            </div>
                        </RevealItem>
                    </div>
                </RevealList>
            </div>
        </section>
    );
};

export default Services;
