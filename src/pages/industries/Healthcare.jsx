import React from 'react';

const Healthcare = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Healthcare Solutions</h1>
                        <p className="text-xl opacity-90">Transforming the Future of Patient Care</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's rapidly evolving healthcare landscape, organizations face numerous challenges, from managing patient data securely to adopting the latest medical technologies.
                            </p>
                            <p className="text-gray-600 text-lg">
                                At Wirecto, we offer comprehensive healthcare solutions that help providers streamline operations, improve patient outcomes, and ensure compliance with ever-changing regulations.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/HEALTHCARE-2.jpg" alt="Healthcare Solutions" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Healthcare IT Solutions */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Comprehensive Healthcare IT Solutions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Electronic Health Records',
                                    description: 'Custom EHR solutions for efficient patient record management.'
                                },
                                {
                                    title: 'Healthcare Data Security',
                                    description: 'HIPAA-compliant data protection and secure cloud storage.'
                                },
                                {
                                    title: 'Telemedicine Solutions',
                                    description: 'Remote consultation platforms for virtual healthcare delivery.'
                                },
                                {
                                    title: 'Healthcare Analytics',
                                    description: 'Data analytics for patient outcomes and operational optimization.'
                                },
                                {
                                    title: 'Hospital Management Systems',
                                    description: 'Integrated systems for hospital administration and operations.'
                                },
                                {
                                    title: 'Clinical Decision Support',
                                    description: 'AI-powered tools for diagnostic accuracy and treatment planning.'
                                }
                            ].map((solution, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{solution.title}</h3>
                                    <p className="text-gray-600">{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Patient Care Technology */}
                    <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Improving Patient Care through Technology</h2>

                        <div className="space-y-6">
                            {[
                                'Patient Engagement Platforms for better communication',
                                'Mobile Health Solutions for remote monitoring',
                                'Clinical Decision Support Systems for accurate diagnoses',
                                'Remote Patient Monitoring for chronic condition management',
                                'Medical IoT Devices for real-time health tracking',
                                'Wearable Health Technology for preventive care'
                            ].map((tech, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        ♥
                                    </div>
                                    <span className="text-gray-700 text-lg">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Healthcare;