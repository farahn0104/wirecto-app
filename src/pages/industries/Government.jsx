import React from 'react';

const Government = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Government Solutions</h1>
                        <p className="text-xl opacity-90">Empowering Public Sector Efficiency</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the digital age, governments across the globe are striving to improve public services, streamline operations, and enhance citizen engagement.
                            </p>
                            <p className="text-gray-600 text-lg">
                                At Wirecto, we provide innovative, scalable, and secure IT solutions designed to help government agencies meet their evolving needs.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/GOVERMENT-1.jpg" alt="Government Solutions" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Government IT Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive IT Solutions for Government Agencies</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'E-Government Solutions',
                                    description: 'Digital services for citizens including tax filing and social welfare programs.'
                                },
                                {
                                    title: 'Data Management & Analytics',
                                    description: 'Secure storage, processing, and analysis of large government data volumes.'
                                },
                                {
                                    title: 'Public Safety Solutions',
                                    description: 'Surveillance systems, emergency response technologies, and law enforcement tools.'
                                },
                                {
                                    title: 'Cloud Solutions',
                                    description: 'Secure, scalable cloud services for government operations and collaboration.'
                                },
                                {
                                    title: 'Smart Cities Solutions',
                                    description: 'IoT integration for urban infrastructure and sustainable city management.'
                                },
                                {
                                    title: 'Document Management Systems',
                                    description: 'Digitization and automation of government paperwork and records.'
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="text-3xl font-bold text-primary mb-3">{index + 1}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                                    <p className="text-gray-600">{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Transparency & Accountability */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Ensuring Transparency and Accountability</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                'Digital Voting Systems',
                                'Public Financial Management',
                                'Citizen Engagement Platforms',
                                'Open Data Initiatives',
                                'Performance Monitoring',
                                'Compliance Tracking'
                            ].map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        ✓
                                    </div>
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Government;