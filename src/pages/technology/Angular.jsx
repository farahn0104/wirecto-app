import React from 'react';

const Angular = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Angular Development</h1>
                        <p className="text-xl opacity-90">Revolutionizing Web Development for Contemporary Enterprises</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In our digital-first world, providing a great user experience has never been more important! A smooth, engaging, and responsive web application can make a difference in keeping customers happy.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Angular shines as the perfect choice for creating modern, high-performance web applications that deliver exceptional user experiences.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/angular.jpeg" alt="Angular Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* What is Angular */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">What is Angular?</h2>
                        <p className="text-gray-600 text-lg mb-6">
                            Angular is an awesome, open-source framework based on TypeScript that's developed and cared for by Google. It's specially crafted for building dynamic, single-page web applications (SPAs), allowing developers to create super interactive and responsive user interfaces with ease!
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {[
                                {
                                    title: 'Component-Based Architecture',
                                    description: 'Angular simplifies development by breaking down the UI into reusable, independent components.'
                                },
                                {
                                    title: 'Two-Way Data Binding',
                                    description: 'Updates to the UI automatically reflect in the underlying data model, ensuring real-time synchronization.'
                                },
                                {
                                    title: 'Built-In Dependency Injection',
                                    description: 'Boosts code efficiency and reusability, reducing development time while ensuring robust performance.'
                                },
                                {
                                    title: 'Rich Tooling and Ecosystem',
                                    description: 'Comes equipped with tools like Angular CLI, which accelerates development with streamlined workflows.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Angular for Your Business */}
                    <div className="mb-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Why Choose Angular for Your Business?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Fast and Scalable Solutions: Ideal for creating scalable, high-performance web applications.',
                                'Enhanced User Experience: Dynamic features and responsive design ensure smooth, engaging experiences.',
                                'Future-Ready Applications: With Google\'s active support and continuous updates, Angular remains future-proof.',
                                'Seamless Integration: Easily integrates with backend systems, third-party tools, and APIs.',
                                'Enterprise-Ready: Built for large-scale applications with comprehensive testing and tooling.',
                                'TypeScript Support: Strong typing helps catch errors early and improves code quality.'
                            ].map((reason, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-red-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Angular Services */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Angular Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Custom Angular Application Development',
                                    description: 'Build tailored applications that align with your business objectives.'
                                },
                                {
                                    title: 'Single-Page Application Development',
                                    description: 'Create fast, responsive SPAs that deliver exceptional user experiences.'
                                },
                                {
                                    title: 'Angular Maintenance and Support',
                                    description: 'Ongoing support to keep your applications running smoothly.'
                                },
                                {
                                    title: 'Migration to Angular',
                                    description: 'Upgrade legacy applications to modern Angular frameworks.'
                                },
                                {
                                    title: 'Integration with APIs',
                                    description: 'Seamless integration with backend systems and third-party services.'
                                },
                                {
                                    title: 'Performance Optimization',
                                    description: 'Optimize your Angular applications for maximum speed and efficiency.'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <div className="text-3xl font-bold text-red-600 mb-3">{index + 1}</div>
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

export default Angular;