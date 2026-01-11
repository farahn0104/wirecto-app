import React from 'react';

const Azure = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-primary to-accent">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center text-white max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">Microsoft Azure</h1>
                        <p className="text-xl opacity-90">Unlock the Power of Cloud Computing</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-600 text-lg mb-6">
                                In today's digital age, businesses need scalable, secure, and reliable cloud solutions to stay ahead. Microsoft Azure is the answer—a cutting-edge cloud platform designed to accelerate innovation and drive business transformation.
                            </p>
                            <p className="text-gray-600 text-lg">
                                At Wirecto, we empower businesses to fully leverage the capabilities of Azure, transforming how they operate, enhancing security measures, and facilitating seamless scaling.
                            </p>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/img/1-1.png"
                                alt="Microsoft Azure Cloud"
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </div>

                    {/* Why Azure */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Azure?</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Global Reach',
                                    description: 'Operate globally with Azure\'s extensive network of data centers, which ensures lightning-fast performance anywhere in the world.'
                                },
                                {
                                    title: 'Unmatched Security',
                                    description: 'Built with enterprise-grade security to protect your data, compliance is a breeze with Azure.'
                                },
                                {
                                    title: 'Cost Efficiency',
                                    description: 'Azure\'s flexible pricing models allow you to pay only for what you use, optimizing your IT budget.'
                                },
                                {
                                    title: 'Innovative Services',
                                    description: 'From AI and machine learning to IoT and analytics, Azure offers tools to power your future.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Azure Services */}
                    <div className="mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 text-white">
                        <h2 className="text-4xl font-bold mb-8">Our Azure Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                'Cloud Migration: Seamlessly move your applications, data, and infrastructure to Azure',
                                'Azure DevOps: Accelerate development cycles with DevOps tools',
                                'Data & Analytics: Transform raw data into actionable insights',
                                'Managed Azure Services: Let us handle your cloud infrastructure',
                                'AI & Machine Learning: Build intelligent applications',
                                'IoT Solutions: Connect and manage IoT devices at scale'
                            ].map((service, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                                        ✓
                                    </div>
                                    <span className="text-lg">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* AI & ML Development */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Partner with Us for AI & ML Development?</h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: 'Tailored AI Solutions',
                                    description: 'Our AI solutions are customized to help you achieve your objectives, whether it\'s enhancing customer engagement through smart chatbots or improving decision-making.'
                                },
                                {
                                    title: 'Insights Powered by Data',
                                    description: 'We utilize machine learning to dive deep into your data, uncovering valuable insights and hidden trends that inform strategic decisions.'
                                },
                                {
                                    title: 'Flexible and Scalable ML Models',
                                    description: 'Our machine learning models are designed to scale with your business, adapting to new demands and opportunities.'
                                },
                                {
                                    title: 'Comprehensive AI Development',
                                    description: 'We handle every aspect of AI & ML development—from initial ideation and system design to deployment and ongoing support.'
                                },
                                {
                                    title: 'Dedication to Innovation',
                                    description: 'We integrate the latest AI and ML innovations into our solutions, ensuring that your business remains competitive and future-ready.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Azure;