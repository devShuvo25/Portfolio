import React from 'react';
import Reveal, { RevealList, RevealItem } from '../Reveal';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: "Product Admin Dashboard",
            category: "UI-UX Design",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCWrV1uVOFSifn6wwS7FSAhsdTTEao9WIoFFKTLhoGb3HuiRr-iYJ3tt4Tr5961s5en4qTaVlbSNJ4yqFfAf6hU8M6yWwbJiXSuvUVw9mxSJjPTlwlUaL5Cic4xU_EwlDCJSC-LoRrq29LHI2b7V43tUp46f_VUEnF97fJcH8kEAawnKoFHhsRVX_9NK6fG2Bs_nwFyQLZMX19TMCUvdfCyuiG29D5xBu3k2_xdK32vxdWEXQZAI6auz6cKzyitN-82wMmRUMC0A",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet."
        },
        {
            title: "Product Admin Dashboard",
            category: "UI-UX Design",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIhzMaRWm5rmG916QLk_m9Mgn00ZRMQIOlPKMRqgwRVG6PkM2nbYGkWA6TNXLW0pikQmWbKEu3s05EBTYN8IwoHt-FEBZMWdvnafuoBhn198qYJ28e0MNN3LPJCqa9yhA-nR8TtjA1-Mf6jsZ_-WFGTNW5010Kt4WYNdg-FDvsuco5b3SNrFAvbMrW6JgtErV7lnDZ7YQXkU3j58dSV90n2rrI_Wl146wMHetkedsnuiO9tTQ5xIlMmB0EPD5EzVTncK8lWKTZjQ",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet."
        },
        {
            title: "Product Admin Dashboard",
            category: "UI-UX Design",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGBmcySTBHsO_L0_NAoWThF2w-syOk102IzVExc1h-xXtv0uABkAJ5KXMIr_bRak3NAinDxTua531cfIxA_JutTNMrm7-XIrRcAqwXbtzpU3pbs1jdWoBLEpB0gQ4XClMwBDZMy9C9vzrhwFATcOg8H8iJ-skJW1EyOrd_AsW_fkuy5wbNfDOslu_5T6bVzAPj0TTYPxB2ZxQ_RrOl7nVl2hQy44s7GF88uBniinzgBADUJ3qMywhj-gaelIGUb9HpJekZRMdXLA",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet."
        },
        {
            title: "Product Admin Dashboard",
            category: "UI-UX Design",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIgD6yscF-DPbgnNZuRue_QknM1ont8bX8vzcKZO732UPAK4Fgy7UfelhBKk-mCfc9ifPtXj7EWvxwGxKHp0b1ZQsntMowT3jk8U-t-DT20dfDthgiBhx8vY3WbXfXuQk-J2ZOS6eA314fVOoaXFZrR_zDxxWjJp918nL6JSN9NaKnPoE15kAAYKbOTOdogDZUF0-NusNCzY_Bigc3i8c2jUJbKnIKRGcTXmXMhJavTZ6WfpUqy1Skxhp466leTSgkRXREiyPxKg",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet."
        },
        {
            title: "Product Admin Dashboard",
            category: "UI-UX Design",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkYUHpCvnq36cxbxRb0t4GiNlCdiHQYW1W437-MRuWUEnvGe6LNVPTI0ZHMVmgddS8Osu1C19kyI0dGbFvHJBJGthb7irSajxLj4Dy8nODtRM88enZggwUfndRcFGqV5QRLma1XpVMOHccCNvcugMx6cTjjwfHXPg4CBozcH-KFrozDV6BalMkdR0VbGdckDgYnsnki9OGPgXUCTcGmWOhR7tMRNekoMoeG2UgRBq7ZOXmX6AJVxwN2Go2nLQpiaRTuRRiZW_yuw",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet."
        },
        {
            title: "Product Admin Dashboard",
            category: "UI-UX Design",
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAq93-IVMxjUxsc_s6O1i9x1HnqxZKT9cNdaQCe5L7sFU9iktrXdCfHLcB2MfUM9Ao-536MVnzAsTqsaGmmWET_Eh6tH8nGs7Pt9_WzZSpxb0U4UHn3t0j3jhPSDFP86vLbWdHtKahFK5LZKQq5Eqtp1K8zB6E3fCFNTMdNrwSF0M8irYwO5OLPOKxa0QewD-kN6v703fSEhVVWh0IqCysrTl75YkTr6DlB--tL-g3zdw6_yz5b8K9Df1YkDf21cc6gnCmc0_83eA",
            desc: "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet."
        },
    ];

    return (
        <section>
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-light dark:text-heading-dark">Portfolio</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                    </p>
                </div>
            </Reveal>
            
            <RevealList>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <RevealItem key={idx}>
                            <motion.div 
                                whileHover={{ 
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}
                                className="group bg-card-light dark:bg-card-dark rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border border-slate-100 dark:border-gray-700 h-full"
                            >
                                <div className="relative overflow-hidden h-56 w-full">
                                    <motion.img 
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        alt={project.title} 
                                        className="w-full h-full object-cover" 
                                        src={project.img} 
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-2">
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{project.category}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-light dark:text-heading-dark mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <div className="mt-auto">
                                        <motion.a 
                                            whileHover={{ x: 5 }}
                                            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                                            href="#"
                                        >
                                            Case Study
                                            <span className="material-symbols-outlined text-base ml-2">arrow_forward</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </RevealItem>
                    ))}
                </div>
            </RevealList>
            
            <Reveal>
                <div className="mt-16 text-center">
                    <button className="bg-primary hover:bg-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-purple-300">
                        More Project
                    </button>
                </div>
            </Reveal>
        </section>
    );
};

export default Portfolio;
