import React from 'react';

const JavaScript = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">JavaScript Development</h1>
                        <p className="text-xl opacity-90">Enhance Your Web Applications with Modern JavaScript</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the dynamic landscape of web development, few technologies hold as much significance as JavaScript. This powerful programming language serves as the backbone for crafting modern, interactive, and scalable applications.
                            </p>
                            <p className="text-gray-600 text-lg">
                                At Wirecto, we leverage the versatility and potential of JavaScript to create innovative solutions designed specifically to address your unique business needs.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/6.png" alt="JavaScript Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why JavaScript */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why JavaScript?</h2>

                        <div className="space-y-6">
                            {[
                                'Dynamic User Interfaces: Create engaging and responsive user interface elements that captivate users.',
                                'Cross-Platform Development: Develop seamless experiences for web, mobile, and desktop applications.',
                                'Scalability: Efficiently scale applications using frameworks like React, Angular, and Vue.js.',
                                'Versatility: Use Node.js to power back-end systems, enabling full-stack development.',
                                'Rich Ecosystem: Access thousands of libraries and tools that accelerate the development process.',
                                'Real-time Applications: Build real-time features like chat, notifications, and live updates.'
                            ].map((reason, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                                        ✓
                                    </div>
                                    <span className="text-gray-700 text-lg">{reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Transformative Applications */}
                    <div className="mb-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Transformative Applications of JavaScript</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                'Web Development: Design intuitive websites that drive engagement.',
                                'Mobile Applications: Deliver cross-platform mobile apps using React Native.',
                                'E-commerce: Create seamless online shopping experiences.',
                                'Data Visualization: Turn complex data into actionable insights.',
                                'Game Development: Build immersive browser-based games.',
                                'IoT Applications: Connect and control IoT devices through web interfaces.',
                                'Progressive Web Apps: Deliver app-like experiences in the browser.',
                                'Server-Side Applications: Build scalable backend services with Node.js.',
                                'Real-time Collaboration: Create collaborative tools and platforms.'
                            ].map((application, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                                    <span>{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wirecto: Your Partner in JavaScript Development */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Wirecto: Your Partner in JavaScript Development</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Custom Web Applications',
                                    description: 'Develop bespoke solutions that reflect your brand and meet your users\' needs.'
                                },
                                {
                                    title: 'Front-End Development',
                                    description: 'Create visually stunning and interactive interfaces for an engaging user experience.'
                                },
                                {
                                    title: 'Back-End Development',
                                    description: 'Build robust server-side systems using Node.js and Express.'
                                },
                                {
                                    title: 'Full-Stack Solutions',
                                    description: 'Integrate front-end and back-end development for cohesive applications.'
                                },
                                {
                                    title: 'Framework Expertise',
                                    description: 'Specialized knowledge in React, Angular, Vue.js, and other modern frameworks.'
                                },
                                {
                                    title: 'Ongoing Support',
                                    description: 'Ensure your applications run smoothly with our 24/7 technical assistance.'
                                }
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JavaScript;