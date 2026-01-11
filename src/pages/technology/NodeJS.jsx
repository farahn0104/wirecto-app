import React from 'react';

const NodeJS = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Node.js Development</h1>
                        <p className="text-xl opacity-90">Empower Your Applications with Scalable Backend Solutions</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the rapidly evolving digital landscape of today's world, businesses face increasing pressure to develop applications that are not only robust and scalable but also high-performing.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Node.js is a revolutionary runtime environment that is transforming the way backend development is approached, allowing developers to build applications that are fast, efficient, and capable of handling large volumes of simultaneous connections.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/node-js.jpeg" alt="Node.js Development" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Node.js for Your Business */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Node.js for Your Business?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Real-Time Processing',
                                    description: 'Ideal for applications that require instant data exchange, such as live chats, IoT solutions, or collaboration tools.'
                                },
                                {
                                    title: 'Scalable Architecture',
                                    description: 'Whether running a startup or scaling an enterprise, Node.js handles millions of simultaneous connections seamlessly.'
                                },
                                {
                                    title: 'Cross-Platform Compatibility',
                                    description: 'Build once and deploy across platforms effortlessly, saving time and resources.'
                                },
                                {
                                    title: 'Rich Ecosystem',
                                    description: 'With access to over a million open-source libraries in NPM, developers can rapidly implement innovative features.'
                                },
                                {
                                    title: 'High Performance',
                                    description: 'Non-blocking I/O and event-driven architecture ensure fast and efficient processing.'
                                },
                                {
                                    title: 'Full-Stack JavaScript',
                                    description: 'Use JavaScript for both frontend and backend development, streamlining the development process.'
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wirecto's Node.js Development Expertise */}
                    <div className="mb-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Wirecto's Node.js Development Expertise</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Tailored Solutions for Every Need: From real-time applications and APIs to scalable web platforms.',
                                'Lightning-Fast Performance: Optimized applications leveraging Node.js\'s non-blocking I/O model.',
                                'Secure and Scalable Applications: Prioritizing security and scalability at every step.',
                                'Seamless Integration: Effortless integration with third-party tools or legacy systems.',
                                'End-to-End Development Support: From concept to deployment, supporting you at every stage.',
                                'Microservices Architecture: Building scalable microservices for complex applications.'
                            ].map((expertise, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{expertise}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Node.js Use Cases */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Node.js Use Cases</h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'Real-time Chat Apps',
                                'API Development',
                                'Streaming Applications',
                                'IoT Backends',
                                'Microservices',
                                'E-commerce Platforms',
                                'Social Media Apps',
                                'Collaboration Tools',
                                'Gaming Servers',
                                'Payment Processing',
                                'Data Streaming',
                                'Proxy Servers',
                                'Ad Servers',
                                'Single Page Apps',
                                'CRM Systems',
                                'Dashboard Applications'
                            ].map((usecase, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 text-center shadow">
                                    <span className="font-medium text-gray-700">{usecase}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NodeJS;