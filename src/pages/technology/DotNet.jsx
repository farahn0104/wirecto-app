import React from 'react';

const DotNet = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">.NET Development</h1>
                        <p className="text-xl opacity-90">Unleashing the Power of .NET Framework</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's fiercely competitive digital landscape, businesses are constantly seeking reliable and cutting-edge technology to gain a competitive edge.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Microsoft's powerful .NET framework has revolutionized the way applications are developed, offering a rich and flexible environment that fosters innovation and efficiency.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/dotnet.jpeg" alt=".NET Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why .NET is the Framework of the Future */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why .NET is the Framework of the Future</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'One Framework, Many Possibilities',
                                    description: 'From cloud-based enterprise solutions to real-time web apps and IoT platforms, .NET adapts to your unique needs.'
                                },
                                {
                                    title: 'Lightning-Fast Performance',
                                    description: 'Built to optimize application speed and resource efficiency, .NET ensures seamless performance even at scale.'
                                },
                                {
                                    title: 'Global Reach, Local Precision',
                                    description: 'With native cloud integrations and multi-platform compatibility, .NET applications perform across geographies and devices.'
                                },
                                {
                                    title: 'Security First',
                                    description: 'Built-in security features and regular updates ensure your applications are protected against threats.'
                                },
                                {
                                    title: 'Cross-Platform Development',
                                    description: '.NET Core enables development for Windows, Linux, and macOS from a single codebase.'
                                },
                                {
                                    title: 'Modern Development Tools',
                                    description: 'Visual Studio and other tools provide a comprehensive development environment.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our .NET Development Services */}
                    <div className="mb-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Our .NET Development Services at Wirecto</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Bespoke Web Applications: Dynamic, secure, and user-friendly web applications.',
                                'Enterprise Software Solutions: Designed for complex organizational workflows.',
                                'Next-Gen Cloud Applications: Seamlessly deploy scalable applications with Azure.',
                                'Legacy System Modernization: Transform outdated systems into modern platforms.',
                                'Cross-Platform Mobile Apps: Build stunning mobile apps with .NET MAUI.',
                                'API Development: Robust APIs for system integration and communication.',
                                'Microservices Architecture: Scalable microservices for complex applications.',
                                'Performance Optimization: Ensure your applications run at peak performance.'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What Makes Wirecto Your Perfect .NET Partner */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">What Makes Wirecto Your Perfect .NET Partner?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Custom-First Approach',
                                    description: 'Every solution we deliver is uniquely tailored to your business goals and user expectations.'
                                },
                                {
                                    title: 'Agile Expertise',
                                    description: 'Our team embraces agile development methodologies to ensure rapid delivery without compromising quality.'
                                },
                                {
                                    title: 'Innovation at Scale',
                                    description: 'We don\'t just develop applications; we create scalable ecosystems designed to evolve with your business.'
                                },
                                {
                                    title: 'End-to-End Support',
                                    description: 'From ideation to deployment and maintenance, we stand by you at every stage of your .NET journey.'
                                },
                                {
                                    title: '.NET Technology Stack',
                                    description: 'Expertise in ASP.NET, .NET Core, Entity Framework, Blazor, and other .NET technologies.'
                                },
                                {
                                    title: 'Industry Experience',
                                    description: 'Proven track record across various industries including finance, healthcare, and e-commerce.'
                                }
                            ].map((reason, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="text-3xl font-bold text-purple-600 mb-3">{index + 1}</div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{reason.title}</h3>
                                    <p className="text-gray-600 text-sm">{reason.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DotNet;