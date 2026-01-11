import React from 'react';

const IoT = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">IoT Solutions</h1>
                        <p className="text-xl opacity-90">Redefining Connectivity for a Smarter World</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                The Internet of Things (IoT) is revolutionizing the way we live, work, and connect with technology. From smart homes to industrial automation, IoT connects devices, collects data, and enables seamless communication.
                            </p>
                            <p className="text-gray-600 text-lg">
                                At Wirecto IoT, we are at the cutting edge of this technological evolution, offering insights, solutions, and tools to help you harness the power of IoT.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/IOT.jpg" alt="IoT Solutions" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* IoT Applications */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">IoT Applications Across Industries</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Smart Homes',
                                    description: 'Voice-controlled lighting, security cameras, and smart appliances for comfortable living.'
                                },
                                {
                                    title: 'Healthcare',
                                    description: 'Wearable fitness trackers and smart medical equipment for remote monitoring.'
                                },
                                {
                                    title: 'Agriculture',
                                    description: 'Smart sensors for soil monitoring and automated irrigation systems.'
                                },
                                {
                                    title: 'Transportation',
                                    description: 'Connected vehicles and real-time traffic monitoring systems.'
                                },
                                {
                                    title: 'Industrial Automation',
                                    description: 'IoT-powered systems for production efficiency and predictive maintenance.'
                                },
                                {
                                    title: 'Retail',
                                    description: 'Inventory tracking, personalized promotions, and automated checkout systems.'
                                }
                            ].map((application, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{application.title}</h3>
                                    <p className="text-gray-600">{application.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Key Benefits */}
                    <div className="mb-16 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Key Benefits of IoT</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Improved Efficiency through automation',
                                'Data-Driven Decision Making with real-time analytics',
                                'Cost Savings from optimized resource utilization',
                                'Enhanced Security with IoT-powered surveillance',
                                'Personalization through user preference learning',
                                'Predictive Maintenance to prevent downtime'
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-accent font-bold mr-4">
                                        ✓
                                    </div>
                                    <span className="text-lg">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Future Technologies */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">IoT and the Future</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'AI-Powered IoT: Smarter devices that learn and adapt',
                                '5G Integration: Faster, more reliable connectivity',
                                'Blockchain Security: Enhanced security for IoT data',
                                'Edge Computing: Faster processing at the network edge',
                                'Green IoT: Energy-efficient sustainable solutions',
                                'Digital Twins: Virtual replicas of physical systems'
                            ].map((future, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                                        →
                                    </div>
                                    <span className="text-gray-700 text-lg">{future}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IoT;