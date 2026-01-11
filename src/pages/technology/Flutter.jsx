import React from 'react';

const Flutter = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Flutter Development</h1>
                        <p className="text-xl opacity-90">Build Beautiful Cross-Platform Apps</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's fast-paced digital landscape, delivering seamless and high-quality applications across various platforms is more important than ever.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Flutter, developed by Google, is an innovative open-source UI toolkit that empowers businesses to create beautiful, natively compiled applications from a single codebase.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/7.png" alt="Flutter Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Flutter */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Flutter?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Cross-Platform Development',
                                    description: 'Build applications for iOS, Android, web, and desktop using a single codebase.'
                                },
                                {
                                    title: 'Fast Development',
                                    description: 'The Hot Reload feature allows developers to see changes in real-time, significantly speeding up development.'
                                },
                                {
                                    title: 'Beautiful UI',
                                    description: 'Flutter offers a rich set of customizable widgets that ensure visually stunning and consistent designs.'
                                },
                                {
                                    title: 'Native Performance',
                                    description: 'Deliver high-performance applications that provide a smooth and responsive user experience.'
                                },
                                {
                                    title: 'Growing Ecosystem',
                                    description: 'Benefit from a vibrant community and a wealth of plugins that enhance functionality.'
                                },
                                {
                                    title: 'Cost Efficiency',
                                    description: 'Reduce development costs by maintaining a single codebase for multiple platforms.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Applications of Flutter */}
                    <div className="mb-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Applications of Flutter</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'E-commerce: Create feature-rich and engaging shopping experiences.',
                                'Education: Develop interactive and immersive e-learning applications.',
                                'Healthcare: Build secure apps for telemedicine, patient tracking, and more.',
                                'Startups: Launch MVPs quickly and cost-effectively to validate ideas.',
                                'Enterprise Solutions: Deliver robust, scalable applications for business needs.',
                                'Social Media: Build engaging social platforms with smooth animations.',
                                'Finance: Create secure banking and financial management apps.',
                                'Travel: Develop booking and travel planning applications.'
                            ].map((application, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wirecto: Your Trusted Flutter Development Partner */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Wirecto: Your Trusted Flutter Development Partner</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Custom App Development',
                                    description: 'Tailor-made solutions designed to meet your specific business objectives.'
                                },
                                {
                                    title: 'UI/UX Design',
                                    description: 'Stunning and user-friendly interfaces that captivate users.'
                                },
                                {
                                    title: 'Cross-Platform Deployment',
                                    description: 'Reach your audience across multiple platforms with a single app.'
                                },
                                {
                                    title: 'Performance Optimization',
                                    description: 'Ensure your app runs smoothly, even with complex functionalities.'
                                },
                                {
                                    title: 'Ongoing Maintenance',
                                    description: 'Reliable support and updates to keep your app ready for the future.'
                                },
                                {
                                    title: 'Integration Services',
                                    description: 'Seamlessly integrate with backend systems and third-party APIs.'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="text-3xl font-bold text-blue-600 mb-3">{index + 1}</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                                    <p className="text-gray-600 text-sm">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Flutter;