import React from 'react';
import Reveal from '../Reveal';

const About = () => {
    return (
        <section className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="w-full lg:w-5/12 pt-4">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-light dark:text-white mb-6 tracking-tight">
                        What I do?
                    </h2>
                </Reveal>
                <Reveal>
                    <div className="space-y-6 text-text-muted-light dark:text-muted-dark leading-relaxed text-sm md:text-base">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="mt-8">
                        <button className="bg-primary hover:bg-purple-600 text-white font-semibold py-3 px-8 rounded shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-sm uppercase tracking-wide">
                            Say Hello!
                        </button>
                    </div>
                </Reveal>
            </div>
            <div className="w-full lg:w-7/12 flex flex-col gap-6">
                <Reveal>
                    <div className="card-accent bg-card-light dark:bg-card-dark p-6 md:p-8 rounded shadow-soft hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-text-light dark:text-white mb-3">User Experience (UX)</h3>
                        <p className="text-text-muted-light dark:text-muted-dark text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="group bg-card-light dark:bg-card-dark p-6 md:p-8 rounded shadow-soft hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-primary cursor-default">
                        <h3 className="text-xl font-bold text-text-light dark:text-white mb-3 group-hover:text-primary transition-colors">User Interface (UI)</h3>
                        <p className="text-text-muted-light dark:text-muted-dark text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
                        </p>
                    </div>
                </Reveal>
                <Reveal>
                    <div className="group bg-card-light dark:bg-card-dark p-6 md:p-8 rounded shadow-soft hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-primary cursor-default">
                        <h3 className="text-xl font-bold text-text-light dark:text-white mb-3 group-hover:text-primary transition-colors">Web Development</h3>
                        <p className="text-text-muted-light dark:text-muted-dark text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default About;
