import React from 'react';

const GoogleCloud = () => {
    return (
        <div>
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Google Cloud</h1>
                        <p className="text-xl opacity-90">Unleash the Potential of Innovation</p>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In the rapidly evolving digital landscape, businesses are constantly seeking innovative solutions that can adapt and scale alongside their ambitions.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Wirecto stands at the forefront, dedicated to empowering organizations through the extraordinary capabilities of Google Cloud.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img src="/img/2.png" alt="Google Cloud" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    {/* Why Choose Google Cloud */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Google Cloud?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Scalability',
                                    description: 'Effortlessly scale your operations using Google\'s robust infrastructure.'
                                },
                                {
                                    title: 'AI & Machine Learning',
                                    description: 'Utilize advanced AI models to automate processes and gain valuable insights.'
                                },
                                {
                                    title: 'Secure Data Management',
                                    description: 'Safeguard your critical data with top-tier security standards and compliance protocols.'
                                },
                                {
                                    title: 'Seamless Collaboration',
                                    description: 'Enhance efficiency with tools like Google Workspace, enabling real-time collaboration.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
                                    <div className="text-3xl font-bold text-blue-600 mb-4">{index + 1}</div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How Wirecto Adds Value */}
                    <div className="mb-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">How Wirecto Adds Value</h2>

                        <div className="space-y-6">
                            {[
                                'Cloud Migration Made Simple: Move your applications and data to the cloud with minimal downtime.',
                                'Cost Optimization: Get the best ROI with tailored plans and efficient resource allocation.',
                                'Ongoing Support: Our team ensures your Google Cloud environment operates smoothly, always.',
                                'Custom Solutions: Tailored Google Cloud implementations for your specific business needs.',
                                'Security Management: Implement and manage Google Cloud security best practices.',
                                'Performance Optimization: Ensure your applications run at peak performance on Google Cloud.'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span>{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Google Cloud Services */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Google Cloud Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                'Compute Engine',
                                'Cloud Storage',
                                'BigQuery Analytics',
                                'Cloud AI Platform',
                                'Kubernetes Engine',
                                'Cloud Functions',
                                'Cloud SQL',
                                'Cloud Pub/Sub',
                                'Cloud CDN'
                            ].map((service, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                                    <div className="text-4xl mb-3">
                                        {index === 0 && '🖥️'}
                                        {index === 1 && '💾'}
                                        {index === 2 && '📊'}
                                        {index === 3 && '🤖'}
                                        {index === 4 && '⚓'}
                                        {index === 5 && '⚡'}
                                        {index === 6 && '🗄️'}
                                        {index === 7 && '📨'}
                                        {index === 8 && '🌐'}
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

export default GoogleCloud;