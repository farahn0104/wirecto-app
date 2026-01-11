import React from 'react';

const ReactJS = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">ReactJS Development</h1>
                        <p className="text-xl opacity-90">Build Interactive Web Applications</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the rapidly evolving digital landscape, the ability to create dynamic, responsive, and scalable web applications has become more essential than ever.
                            </p>
                            <p className="text-gray-600 text-lg">
                                ReactJS has emerged as the go-to JavaScript library, developed by Facebook, for building modern and intuitive interfaces that capture attention and enhance user experience.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/8.png" alt="ReactJS Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose ReactJS */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose ReactJS?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Component-Based Architecture',
                                    description: 'Build reusable components to speed up and enhance the development process.'
                                },
                                {
                                    title: 'Virtual DOM',
                                    description: 'Achieve high performance through quick updates and efficient rendering.'
                                },
                                {
                                    title: 'Scalability',
                                    description: 'Develop applications that can easily scale as your business expands.'
                                },
                                {
                                    title: 'SEO-Friendly',
                                    description: 'Optimize your web applications to improve visibility on search engines.'
                                },
                                {
                                    title: 'Rich Ecosystem',
                                    description: 'Seamlessly integrate with tools and frameworks like Redux, Next.js, and more.'
                                },
                                {
                                    title: 'Strong Community',
                                    description: 'Benefit from extensive documentation and community support.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ReactJS in Action */}
                    <div className="mb-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">ReactJS in Action</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Single Page Applications (SPAs): Deliver fast, smooth, and engaging user experiences.',
                                'E-commerce Platforms: Build interactive product catalogs and user-friendly checkout processes.',
                                'Dashboards and Data Visualization: Create visually appealing, real-time analytics tools.',
                                'Social Media Platforms: Engage users with interactive feeds and notifications.',
                                'Enterprise Applications: Streamline workflows with robust, scalable solutions.',
                                'Progressive Web Apps: Deliver app-like experiences with offline capabilities.'
                            ].map((application, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-cyan-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{application}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wirecto: Your Partner in ReactJS Development */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Wirecto: Your Partner in ReactJS Development</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                'Custom Web Development',
                                'UI/UX Design',
                                'Integration Services',
                                'Performance Optimization',
                                'Ongoing Support',
                                'Migration Services',
                                'React Native Development',
                                'State Management',
                                'Testing & Quality Assurance'
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                                    <div className="text-4xl mb-3">
                                        {index === 0 && '🛠️'}
                                        {index === 1 && '🎨'}
                                        {index === 2 && '🔗'}
                                        {index === 3 && '⚡'}
                                        {index === 4 && '🛡️'}
                                        {index === 5 && '🔄'}
                                        {index === 6 && '📱'}
                                        {index === 7 && '📊'}
                                        {index === 8 && '✅'}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">{service}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReactJS;